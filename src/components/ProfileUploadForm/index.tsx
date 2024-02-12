"use client";

import React, { ChangeEvent, useRef, useState } from "react";
import { uploadFirebaseStorage } from "@/utils/firebase";
import { fileContainer, fileLabel } from "./ProfileUploadForm.css";
import { fetchRouteHandler } from "@/utils/fetch";

/**
 * 프로필 이미지 업로드 form
 */
const ProfileUploadForm = () => {
  const [file, setFile] = useState<File | null>(null);

  const fileRef = useRef<HTMLInputElement>(null);

  const handleUploadButtonClick = () => {
    fileRef.current?.click();
  };

  /**
   * 업로드 파일 유효성 검증 및 업로드
   */
  const validateFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const inputFile = e.target.files?.[0] ?? null;

    const validImageType = /image\/(jpeg|png)/;
    const maxFileSize = 1024 * 1024 * 20;

    console.log(inputFile);

    if (!inputFile || !validImageType.test(inputFile.type)) {
      alert("파일이 유효하지 않습니다.\njpg 또는 png 형식의 이미지를 업로드해주세요.");
      return;
    } else if (inputFile.size > maxFileSize) {
      alert("이미지의 용량이 너무 큽니다.");
      return;
    }

    const imageUrl = await uploadFirebaseStorage(inputFile);
    setFile(inputFile);

    const res = await fetchRouteHandler({
      path: "/image",
      method: "POST",
      body: JSON.stringify({
        userId: "유저아이디123",
        imageUrl: imageUrl,
      }),
    });

    const result = await fetchRouteHandler({
      path: "/image",
      method: "GET",
    });
    console.log(res);
  };

  return (
    <div className={fileContainer}>
      <input
        type="file"
        id="image"
        title="이미지 업로드"
        ref={fileRef}
        style={{ display: "none" }}
        onChange={validateFile}
      />
      <button type="button" onClick={handleUploadButtonClick}>
        업로드
      </button>
      {file ? <span className={fileLabel}>{file.name}</span> : <span>사진을 업로드해주세요.</span>}
    </div>
  );
};

export default ProfileUploadForm;
