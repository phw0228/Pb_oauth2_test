import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Contract() {
  return (
    <main className="flex flex-col items-center justify-center  min-h-screen bg-white-100 p-6">
      <section className="w-full" style={{ maxWidth: "calc(100% - 2rem)" }}>
        {" "}
        <Card className="mb-6 mx-auto" style={{ maxWidth: "1200px" }}>
          {" "}
          <CardHeader>
            <h2 className="text-2xl font-semibold text-gray-700">New Post</h2>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Input
              className="border border-gray-300 p-2 rounded-md"
              placeholder="Title"
            />
            <textarea
              className="border border-gray-300 p-2 rounded-md h-32 resize-none"
              placeholder="Write your post here..."
            />
            <Input
              className="border border-gray-300 p-2 rounded-md"
              type="file"
            />
            <Button className="bg-black text-white rounded-md">Submit</Button>
          </CardContent>
        </Card>
        {/* 이하 동일한 Card 구성이 반복되므로 생략 */}
      </section>
    </main>
  );
}
