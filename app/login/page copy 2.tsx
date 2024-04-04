"use client";
import React, { useState } from "react";
import PocketBase from "pocketbase";

export default function Page() {
  const pb = new PocketBase("https://signforall.kro.kr");
  const [isClicked, setIsClicked] = useState(false); // 버튼 클릭 상태 관리

  // 사용자가 로그인 버튼을 클릭했을 때 실행할 함수
  const handleLogin = async () => {
    setIsClicked(true); // 버튼 클릭 상태를 true로 설정
    try {
      // 구글 OAuth2 로그인 프로세스 시작
      const authData = await pb
        .collection("users")
        .authWithOAuth2({ provider: "google" });
    } catch (error) {
      console.error("Login failed:", error);
    }
    setIsClicked(false); // 작업 완료 후 버튼 클릭 상태를 false로 설정
  };

  return (
    <>
      <div style={{ marginTop: "10rem" }} />
      <h1 className="text-3xl font-bold">Hello world!</h1>
      {/* 버튼 클릭 상태에 따라 스타일 동적 변경 */}
      <button
        onClick={handleLogin}
        className={`p-2 text-white rounded ${isClicked ? "bg-red-500" : "bg-blue-500"}`}
      >
        Login with Google
      </button>
    </>
  );
}
