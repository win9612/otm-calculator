import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";
import { fbStore } from "../../../../firebase.config";

/**
 * 해당하는 이미지를 가져옵니다.
 */
export async function GET(request: NextRequest) {
  const param = request.nextUrl.searchParams;
  const userId = param.get("userId");

  const res = await getDoc(doc(fbStore, "profile/image/유저아이디123/JmqlEkLW8YngCpWIXqxU"));

  if (res.exists()) {
    console.log(res.data());
  }

  return NextResponse.json({});
}

/**
 * 이미지 url을 업로드합니다.
 */
export async function POST(request: Request) {
  const body = JSON.parse(await request.json());

  const response = await addDoc(collection(fbStore, `profile/image/${body.userId}`), {
    userId: body.userId,
    imageUrl: body.imageUrl,
  });

  return NextResponse.json({});
}
