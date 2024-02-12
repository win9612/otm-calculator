import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";
import { fbStore } from "../../../../firebase.config";

/**
 * 해당하는 이미지를 가져옵니다.
 */
export async function GET(request: NextRequest) {
  const param = request.nextUrl.searchParams;
  const userId = param.get("userId");

  const ref = collection(fbStore, "profile_image");

  const imageQuery = query(ref, orderBy("userId"));
  const r = await getDocs(imageQuery);
  const docs = r.docs;

  const items = [...docs].map((doc) => doc.data());
  console.log(items);

  // const res = await getDoc(doc(fbStore, "profile/image/유저아이디123/JmqlEkLW8YngCpWIXqxU"));

  // if (res.exists()) {
  //   console.log(res.data());
  // }

  return NextResponse.json({
    result: r,
  });
}

/**
 * 이미지 url을 업로드합니다.
 */
export async function POST(request: Request) {
  const body = JSON.parse(await request.json());

  const response = await addDoc(collection(fbStore, `profile_image`), {
    userId: body.userId,
    imageUrl: body.imageUrl,
  });

  return NextResponse.json({});
}
