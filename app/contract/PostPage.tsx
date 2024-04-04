import { Post } from "@/types/post"; // 경로는 프로젝트 구조에 맞게 조정해주세요.
import { fetchPosts } from "@/lib/fetchPosts"; // fetchPosts 함수의 경로를 확인해주세요.

export default async function PostPage() {
  const posts: Post[] = await fetchPosts();

  return (
    <>
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contract Board</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
