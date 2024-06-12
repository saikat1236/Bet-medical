import { FunctionComponent } from "react";
import MainContent from "../components/MainContent";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import VideoPromo from "../components/VideoPromo";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./Final.module.css";

const Final: FunctionComponent = () => {
  return (
    <div className={styles.final}>
      <div className={styles.finalChild} />
      <div className={styles.finalItem} />
      <div className={styles.macbookProFree}>
        <img
          className={styles.macbookProIcon}
          alt=""
          src="/macbook-pro@2x.png"
        />
        <img
          className={styles.addYourScreenInside}
          alt=""
          src="/add-your-screen-inside.svg"
        />
        <div className={styles.macbookProScreen}>
          <div className={styles.macbookProScreenChild} />
          <div className={styles.macbookProScreenItem} />
          <b className={styles.macbookProMockup}>Macbook Pro Mockup</b>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle@2x.png"
          />
          <img className={styles.logoIcon} alt="" src="/logo.svg" />
          <img
            className={styles.lwrRecording4Icon}
            alt=""
            src="/lwr-recording-4@2x.png"
          />
        </div>
      </div>
      <MainContent />
      <FrameComponent5 />
      <section className={styles.finalInner}>
        <div className={styles.frameParent}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/group-292565@2x.png"
          />
          <div className={styles.aboutUsParent}>
            <h1 className={styles.aboutUs}>About Us</h1>
            <div className={styles.betMedicalIsContainer}>
              <p className={styles.betMedicalIs}>
                BET Medical is a responsible and innovative organization that
                has introduced several groundbreaking technologies in the
                healthcare industry. For instance, the table-top sliding on the
                operation theatre table, which is now widely used, was first
                introduced and backed by BET Medical over 25 years ago.
                Similarly, the first flat panel 3D C-Arm and 4-way motorized
                flat panel C-arm machines in India and Asia were sold and
                installed by BET Medical, respectively. First to Introduce
                Therenva Vascular Fusion Imaging and Navigation workstation.
              </p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.responsibilityIsAt}>
                Responsibility is at the core of BET Medical’s operations,
                starting with not over-selling products and ensuring the use of
                contemporary technology to add value to customers through better
                pricing, service, and support. The company’s sales and service
                teams are dedicated to providing a comprehensive range of
                products and brands, cementing strong partnerships with
                principals in Germany, Taiwan, Japan, USA, Italy, and Korea for
                the past 33 years.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.frameSection}>
        <div className={styles.backgroundParent}>
          <img
            className={styles.backgroundIcon}
            loading="lazy"
            alt=""
            src="/background@2x.png"
          />
          <div className={styles.heading2SharingYourEveryWrapper}>
            <h1 className={styles.heading2}>MISSION</h1>
          </div>
          <div className={styles.frameItem} />
          <p className={styles.toBeTheContainer}>
            <span className={styles.toBeTheContainer1}>
              <span>{`To be the `}</span>
              <b>L</b>
              <span>{`argest `}</span>
              <b>A</b>
              <span>{`nd `}</span>
              <b>M</b>
              <span>{`ost `}</span>
              <b>P</b>
              <span>
                referred medical equipment company by winning the confidence of
                the healthcare industry.
              </span>
            </span>
          </p>
        </div>
      </section>
      <FrameComponent4 />
      <div className={styles.ellipseDiv} />
      <div className={styles.rectangleDiv} />
      <div className={styles.macbookProFree1}>
        <img
          className={styles.macbookProIcon1}
          alt=""
          src="/macbook-pro-1@2x.png"
        />
        <img
          className={styles.addYourScreenInside1}
          alt=""
          src="/add-your-screen-inside.svg"
        />
        <div className={styles.macbookProScreen1}>
          <div className={styles.macbookProScreenInner} />
          <div className={styles.macbookProScreenChild1} />
          <b className={styles.macbookProMockup1}>Macbook Pro Mockup</b>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="/rectangle@2x.png"
          />
          <img className={styles.logoIcon1} alt="" src="/logo.svg" />
          <img
            className={styles.lwrRecording4Icon1}
            alt=""
            src="/lwr-recording-4-1@2x.png"
          />
        </div>
      </div>
      <FrameComponent3 />
      <section className={styles.finalInner1}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.sectionHeading2ServingWrapper}>
                <h3 className={styles.sectionHeading}>{`Our Experts `}</h3>
              </div>
              <h1 className={styles.sectionHeading1}>
                Lorem ipsum dolor sit ipsum dolor sit
              </h1>
            </div>
          </div>
          <VideoPromo />
          <FrameComponent1 />
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.sectionHeading2ServingContainer}>
                <h3 className={styles.sectionHeading2}>LOCATION</h3>
              </div>
              <h1 className={styles.sectionHeading3}>PARTNERS LOCATION</h1>
            </div>
          </div>
        </div>
      </section>
      <img className={styles.groupIcon} alt="" src="/group-1000001925@2x.png" />
      <FrameComponent />
    </div>
  );
};

export default Final;
