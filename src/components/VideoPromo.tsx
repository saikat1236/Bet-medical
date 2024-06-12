import { FunctionComponent } from "react";
import styles from "./VideoPromo.module.css";

export type VideoPromoType = {
  className?: string;
};

const VideoPromo: FunctionComponent<VideoPromoType> = ({ className = "" }) => {
  return (
    <div className={[styles.videoPromo, className].join(" ")}>
      <div className={styles.videoDescription}>
        <div className={styles.videoThumbnail} />
        <h1 className={styles.loremIpsumDolor}>Lorem ipsum dolor sit</h1>
        <div className={styles.loremIpsumDolor1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliquaLorem ipsum dolor sit amet,
        </div>
        <div className={styles.watchVideoButton}>
          <div className={styles.watchMoreVideos}>Watch More Videos</div>
        </div>
      </div>
      <div className={styles.photoMain}>
        <div className={styles.galleryImages}>
          <div className={styles.galleryImageOne} />
          <div className={styles.galleryImageTwo} />
          <div className={styles.galleryImageThree} />
          <img
            className={styles.maskGroupIcon}
            loading="lazy"
            alt=""
            src="/mask-group@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPromo;
