"use client";
import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Login } from "./Login";
import { Main } from "./Main";

export default function Home() {
  // 핸들러 함수
  const handleSignUp = () => {
    console.log("Navigate to sign up page");
    // 여기에 회원가입 페이지로 네비게이트하는 로직 구현
  };

  const handleGoogleLogin = () => {
    console.log("Google login logic here");
    // Google 로그인 로직 구현
  };

  const handleKakaoLogin = () => {
    console.log("Kakao login logic here");
    // Kakao 로그인 로직 구현
  };

  const handleNaverLogin = () => {
    console.log("Naver login logic here");
    // Facebook 로그인 로직 구현
  };

  return (
    <>
      <div className="mt-10 md:mt-0" />
      <Login />
      <Main />
    </>
  );
}
