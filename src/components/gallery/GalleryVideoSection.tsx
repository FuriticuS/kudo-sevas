import type { GalleryVideo } from "@/lib/types";
import {
  GALLERY_CARD,
  GALLERY_ALBUM_TITLE,
  GALLERY_SLIDER_WRAP,
  GALLERY_VIDEO,
  GALLERY_VIDEO_VERTICAL_WRAP,
  GALLERY_VIDEO_VERTICAL,
} from "@/lib/styles";

interface GalleryVideoSectionProps {
  video: GalleryVideo;
}

export default function GalleryVideoSection({ video }: GalleryVideoSectionProps) {
  const wrapClass = video.vertical
    ? GALLERY_VIDEO_VERTICAL_WRAP
    : GALLERY_SLIDER_WRAP;
  const videoClass = video.vertical ? GALLERY_VIDEO_VERTICAL : GALLERY_VIDEO;

  return (
    <article className={GALLERY_CARD}>
      <h2 className={GALLERY_ALBUM_TITLE}>{video.title}</h2>
      <div className={wrapClass}>
        <video
          className={videoClass}
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
