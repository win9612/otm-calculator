import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { fbStorage } from "../../firebase.config";

/** firebase storage에 canvas 이미지 업로드
 * @param {File} imageFile url 형식의 이미지
 * @param path firebase storage에 저장할 이미지 경로 (default: "/images/default")
 * @return firebase storage에 저장된 경로 풀네임
 */
export const uploadFirebaseStorage = async (imageFile: File, path?: string) => {
  const filePath = path ? `images/${path}` : "images/default/";
  const fileName = imageFile.name;
  const fullPath = `${filePath}${fileName}`;

  // const filename = new Date().valueOf();
  // const storageRef = ref(storage, `${filePath}${filename}.png`);
  const storageRef = ref(fbStorage, fullPath);

  try {
    await uploadBytes(storageRef, imageFile);
  } catch (e: any) {
    console.error(e);
    alert("파일 업로드 중 오류 발생");
  }

  return fullPath;
};

/** firebase storage에 저장된 이미지 불러오기
 * @param {string} path 파일이름 이전까지의 firebase storage 경로 (예시 -> drawings/1216162.png)
 */
export const downloadFirebaseStorage = async (path: string) => {
  const result = await getDownloadURL(ref(fbStorage, `${path}`));
  return result;
};
