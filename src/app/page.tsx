import { db } from "~/server/db";
import { images } from "~/server/db/schema";
import { and, desc, eq } from 'drizzle-orm';

export const revalidate = 0;

export default async function HomePage() {
  let imageData: any[] = [];
  
  try {
    imageData = await db.query.images.findMany({
      orderBy: [desc(images.id)],
    });
  } catch (error) {
    console.error('Database query failed:', error);
    // Fallback to empty array if query fails
  }

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {imageData.map((image, index) => (
          <div key={`image-${image.id}-${index}`} className="w-56 flex flex-col pt-5">
            <img src={image.url} alt={image.name || `Image ${index + 1}`} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}