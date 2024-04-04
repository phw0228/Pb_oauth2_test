"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";

// 추가: 소셜 로그인 버튼 컴포넌트
import {
  GoogleLoginButton,
  FacebookLoginButton,
  KakaoLoginButton,
} from "@/components/ui/socialLoginButtons";

export function Login() {
  // 소셜 로그인 핸들러 (실제 구현 필요)
  const handleGoogleLogin = () => {
    console.log("Google login logic here");
    // 여기에 Google 로그인 로직 구현
  };

  const handleKakaoLogin = () => {
    console.log("Kakao login logic here");
    // 여기에 Kakao 로그인 로직 구현
  };

  const handleFacebookLogin = () => {
    console.log("Facebook login logic here");
    // 여기에 Facebook 로그인 로직 구현
  };

  // Login 컴포넌트 내부 변경사항
  return (
    <Card className="w-full max-w-sm">
      <CardContent className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your email or phone number and password
          </p>
        </div>
        <div className="space-y-4">
          <Input
            className="rounded-lg"
            id="email"
            placeholder="Email or phone number"
            type="text"
          />
          <Input id="password" placeholder="Password" type="password" />
          <Button className="w-full">Login</Button>
        </div>
        <div className="flex flex-col justify-center items-center space-y-3">
  <GoogleLoginButton onClick={handleGoogleLogin} />
  <KakaoLoginButton onClick={handleKakaoLogin} />
  <FacebookLoginButton onClick={handleFacebookLogin} />
</div>

      </CardContent>
    </Card>
  );
}
