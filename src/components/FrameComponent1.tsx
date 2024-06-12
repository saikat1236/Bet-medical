import { FunctionComponent } from "react";
import FrameComponent2 from "./FrameComponent2";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.relatedVideosWrapper, className].join(" ")}>
      <div className={styles.relatedVideos}>
        <div className={styles.relatedVideosTitle}>
          <b className={styles.relatedVideos1}>{`Related Videos `}</b>
        </div>
        <div className={styles.videos}>
          <FrameComponent2 rectangle5349="/rectangle-5349@2x.png" />
          <FrameComponent2
            rectangle5349="/rectangle-5349-1@2x.png"
            propLineHeight="14px"
            propLineHeight1="13px"
          />
          <FrameComponent2
            rectangle5349="/rectangle-5349-2@2x.png"
            propLineHeight="14px"
            propLineHeight1="13px"
          />
          <FrameComponent2
            rectangle5349="/rectangle-5349-1@2x.png"
            propLineHeight="unset"
            propLineHeight1="unset"
          />
          <FrameComponent2
            rectangle5349="/rectangle-5349@2x.png"
            propLineHeight="unset"
            propLineHeight1="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
