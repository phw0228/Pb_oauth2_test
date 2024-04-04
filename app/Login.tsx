"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import {
  GoogleLoginButton,
  NaverLoginButton,
  KakaoLoginButton,
} from "@/components/ui/socialLoginButtons";

// 서비스 이름에 대한 타입을 선언합니다.
type ServiceName = "Google" | "Kakao" | "Naver";

export function Login() {
  const handleLogin = (service: ServiceName) => () =>
    console.log(`${service} login logic here`);

  const handleSignUp = () => console.log("Navigate to sign up page");

  return (
    <div className=" flex justify-center items-center h-screen">
      <div className="w-full max-w-sm">
        <Card>
          <CardContent className="px-5 mt-5 text-center space-y-6">
            {/* */}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Enter your email or phone number and password
              </p>
            </div>
            <Input
              className="rounded-lg"
              placeholder="Email or phone number"
              type="text"
            />
            <Input placeholder="Password" type="password" />
            <div className="flex justify-between">
              <Button className="w-full mr-2">Login</Button>
              <Button className="w-full ml-2" onClick={handleSignUp}>
                Sign Up
              </Button>
            </div>
            <div className="flex flex-col justify-center items-center space-y-3">
              <GoogleLoginButton onClick={handleLogin("Google")} />
              <KakaoLoginButton onClick={handleLogin("Kakao")} />
              <NaverLoginButton onClick={handleLogin("Naver")} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
