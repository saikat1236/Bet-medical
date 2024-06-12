import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
  rectangle5349?: string;

  /** Style props */
  propLineHeight?: CSSProperties["lineHeight"];
  propLineHeight1?: CSSProperties["lineHeight"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  rectangle5349,
  propLineHeight,
  propLineHeight1,
}) => {
  const drManishNStyle: CSSProperties = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  const watchOnYoutubeStyle: CSSProperties = useMemo(() => {
    return {
      lineHeight: propLineHeight1,
    };
  }, [propLineHeight1]);

  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src={rectangle5349}
      />
      <div className={styles.frameWrapper}>
        <div className={styles.drManishNRavalParent}>
          <b className={styles.drManishN} style={drManishNStyle}>
            Dr. Manish N Raval
          </b>
          <p
            className={styles.vascularEndo}
          >{`Vascular & Endo Vascular Surgeon  Niva ASK Life Sciences, Ahmedabad`}</p>
          <div className={styles.watchOnYoutubeWrapper}>
            <b className={styles.watchOnYoutube} style={watchOnYoutubeStyle}>
              Watch On Youtube
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
