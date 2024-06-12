import { FunctionComponent } from "react";
import styles from "./MainContent.module.css";

export type MainContentType = {
  className?: string;
};

const MainContent: FunctionComponent<MainContentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.mainContent, className].join(" ")}>
      <header className={styles.header}>
        <div className={styles.headerChild} />
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.phone} />
          <div className={styles.mail} />
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent}>
              <div className={styles.vectorParent}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
              <a className={styles.generalbetmedicalcom}>
                General@betmedical.com
              </a>
            </div>
          </div>
          <div className={styles.frameItem} />
          <div className={styles.frameContainer}>
            <div className={styles.vectorGroup}>
              <img className={styles.vectorIcon2} alt="" src="/vector-2.svg" />
              <a className={styles.a}>+91-44-28344639</a>
            </div>
          </div>
        </div>
        <div className={styles.headerInner}>
          <div className={styles.frameGroup}>
            <div className={styles.image1Parent}>
              <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
              <img
                className={styles.logoIcon}
                loading="lazy"
                alt=""
                src="/logo@2x.png"
              />
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.homeParent}>
                <a className={styles.home}>Home</a>
                <a className={styles.directorsMessage}>Director's Message</a>
                <div className={styles.productsParent}>
                  <a className={styles.products}>{`Products `}</a>
                  <div className={styles.borderWrapper}>
                    <div className={styles.border} />
                  </div>
                </div>
                <a className={styles.servicesSupport}>{`Services & Support`}</a>
                <div className={styles.careerParent}>
                  <a className={styles.career}>{`Career `}</a>
                  <div className={styles.borderContainer}>
                    <div className={styles.border1} />
                  </div>
                </div>
                <div className={styles.galleryParent}>
                  <a className={styles.gallery}>{`Gallery `}</a>
                  <div className={styles.borderFrame}>
                    <div className={styles.border2} />
                  </div>
                </div>
                <a className={styles.library}>Library</a>
                <a className={styles.contactUs}>Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.endonautFusionImagingNaviParent}>
        <h1
          className={styles.endonautFusionImaging}
        >{`Endonaut Fusion Imaging & Navigation`}</h1>
        <div className={styles.makeYourOrReadyForNewChaWrapper}>
          <p className={styles.makeYourOr}>
            Make your or ready for new challenges with Endonaut, unique image
            fusion systems compatible with any imaging modality and C-arm
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
