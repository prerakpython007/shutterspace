import Link from "next/link";

const mockUrls = [
  "https://l0jk0814aw.ufs.sh/f/cyUjMXWL2FnSd67VI9CDI8h45aHy0CqBGSbeuDZn7prwYxgX",
  "https://l0jk0814aw.ufs.sh/f/cyUjMXWL2FnSd67VI9CDI8h45aHy0CqBGSbeuDZn7prwYxgX",
  "https://l0jk0814aw.ufs.sh/f/cyUjMXWL2FnSd67VI9CDI8h45aHy0CqBGSbeuDZn7prwYxgX",
  "https://mryx17lej8.ufs.sh/f/HzaylkhOXuVEHflYpghOXuVEA1Z76qdCzj5rsvB8WTPYfx2t",
  "https://mryx17lej8.ufs.sh/f/HzaylkhOXuVEuqk3SgEE2xwpnG5XgqVL1vBt6sdym78WhZHl",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={`image-${index}`} className="w-56 p-5">
            <img src={image.url} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </main>
  );
}