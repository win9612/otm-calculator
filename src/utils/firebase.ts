import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage();

/** dataURL을 File 객체로 변환해주는 함수 */
const dataURLtoFile = (dataurl: string, filename: string) => {
  const arr = dataurl.split(",");
  const mime = arr[0].match(/:(.*?);/)![1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};

/** firebase storage에 canvas 이미지 업로드
 * @param imageDataUrl url 형식의 이미지
 * @param path firebase storage에 저장할 이미지 경로
 * @return firebase storage에 저장된 경로 풀네임
 */
export const uploadFirebaseStorage = async (imageDataUrl: string, path: string) => {
  const filePath = path ? path : "images/";
  const filename = new Date().valueOf();

  const storageRef = ref(storage, `${filePath}${filename}.png`);
  const imageFile = dataURLtoFile(imageDataUrl, "canvas_image.png");

  try {
    await uploadBytes(storageRef, imageFile);
  } catch (e: any) {
    console.error(e);
    alert("파일 업로드 중 오류 발생");
  }

  return `${filePath}${filename}`;
};

/** firebase storage에 저장된 이미지 불러오기
 * @param {string} path 파일이름 이전까지의 firebase storage 경로 (예시 -> drawings/1216162.png)
 */
export const downloadFirebaseStorage = async (path: string) => {
  const result = await getDownloadURL(ref(storage, `${path}`));
  return result;
};
