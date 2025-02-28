import { db } from "~/server/db";
import { images } from "~/server/db/schema";

export const dynamic =  "force-dynamic";



export default async function HomePage() {

  const images = await db.query.images.findMany({
    orderBy: (modal, {desc}) => desc(modal.id),
  });
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={`image-${index}`} className="w-56 flex flex-col pt-5">
            <img src={image.url} alt={`Image ${index + 1}`} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}