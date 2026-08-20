import type { GalleryVideo } from "@/lib/types";
import {
  GALLERY_CARD,
  GALLERY_ALBUM_TITLE,
  GALLERY_SLIDER_WRAP,
  GALLERY_VIDEO,
} from "@/lib/styles";

interface GalleryVideoSectionProps {
  video: GalleryVideo;
}

export default function GalleryVideoSection({ video }: GalleryVideoSectionProps) {
  return (
    <article className={GALLERY_CARD}>
      <h2 className={GALLERY_ALBUM_TITLE}>{video.title}</h2>
      <div className={GALLERY_SLIDER_WRAP}>
        <video
          className={GALLERY_VIDEO}
          controls
          playsInline
          preload="metadata"
          poster={video.poster}
        >
          <source src={video.src} type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      </div>
    </article>
  );
}
