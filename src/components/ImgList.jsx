import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { getCollection } from "astro:content";

export default function ArtGallery({ amount, radius }) {
  const [artAmount, setArtAmount] = useState([]);
  const isRadius = radius ? "1%" : "0";

  useEffect(() => {
    async function fetchData() {
      const art = await getArt();
      setArtAmount(art.slice(0, amount));
    }
    fetchData();
  }, [amount]);

  async function getArt() {
    const artCollection = await getCollection("art");
    return Promise.all(
      artCollection.map(async ({ data, slug }) => ({
        title: data.title,
        src: data.src,
        excerpt: data.excerpt,
        date: data.date,
        slug: slug,
      }))
    );
  }

  return (
    <div className="image-container">
      {artAmount.map(({ title, src, excerpt, date, slug }) => (
        <div className="image-item" key={slug}>
          <div className="image-wrapper">
            <img
              src={src}
              alt={title}
              className={`img-fade ${isRadius} aspect-auto`}
              width={1400}
              height={1400}
              onLoad={(event) => {
                event.target.classList.remove("img-fade");
              }}
            />
            <div className="overlay">
              <a href={`/art/${slug}`}>
                <div className="text">{title}</div>
              </a>
            </div>
          </div>
        </div>
      ))}
      <style jsx>{`
        .image-container {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }

        .image-item {
          flex: 1 1 100%;
          position: relative;
          max-width: 100%;
        }

        @media (min-width: 768px) {
          .image-item {
            flex: 1 1 calc(50% - 1rem);
          }
        }

        @media (min-width: 1024px) {
          .image-item {
            flex: 1 1 calc(25% - 1rem);
          }
        }

        img {
          width: 100%;
        }

        img:hover {
          transform: scale(1.02);
          transition: transform 500ms ease-out;
          cursor: pointer;
        }

        .overlay {
          width: 100%;
          z-index: 10;
          border-radius: 1%;
          opacity: 0;
          position: absolute;
          inset: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: opacity 0.5s ease;
          background-color: rgba(0, 0, 0, 0.5);
        }

        .overlay:hover {
          opacity: 1;
        }

        a:hover {
          text-decoration-color: var(--primary-2);
        }

        .text {
          color: white;
          font-size: 24px;
          font-family: var(--inconsolata);
          font-weight: 300;
          text-align: center;
        }

        .text:hover {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
