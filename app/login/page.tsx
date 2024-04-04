"use client";
import React from "react";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://signforall.kro.kr/pb/"); // PocketBase 서버 URL로 변경하세요

const page = () => {
  const handleLogin = async () => {
    try {
      // Google OAuth2 로그인 시작
      const authData = await pb.collection("users").authWithOAuth2({
        provider: "google", // 인증 제공자 설정
      });

      // 인증 성공 후, 사용자의 인증 정보를 콘솔에 출력
      console.log("Auth data:", authData);
      console.log("Is authenticated:", pb.authStore.isValid);
      console.log("Token:", pb.authStore.token);
      console.log("User ID:", pb.authStore.model.id);
    } catch (error) {
      // 인증 실패 시, 오류를 콘솔에 출력
      console.error("Authentication failed:", error);
    }
  };

  return (
    <div>
      <div style={{ marginTop: "10rem" }} />
      <h1>Welcome to the App</h1>
      {/* 로그인 버튼. 클릭 시 handleLogin 함수 호출 */}
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default page;
