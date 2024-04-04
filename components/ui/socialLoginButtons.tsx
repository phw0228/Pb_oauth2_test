import React from "react";
import Image from "next/image";

interface SocialLoginButtonProps {
  onClick: () => void;
}

export const GoogleLoginButton: React.FC<SocialLoginButtonProps> = ({
  onClick,
}) => (
  <button onClick={onClick} aria-label="Login with Google">
    <Image
      src="/images/loginlogos/google.png"
      alt="Google"
      width={150}
      height={38}
    />
  </button>
);

export const NaverLoginButton: React.FC<SocialLoginButtonProps> = ({
  onClick,
}) => (
  <button onClick={onClick} aria-label="Login with Facebook">
    <Image
      src="/images/loginlogos/naver.png"
      alt="Naver"
      width={150}
      height={38}
    />
  </button>
);

export const KakaoLoginButton: React.FC<SocialLoginButtonProps> = ({
  onClick,
}) => (
  <button onClick={onClick} aria-label="Login with Kakao">
    <Image
      src="/images/loginlogos/kakao.png"
      alt="Kakao"
      width={150}
      height={38}
    />
  </button>
);
