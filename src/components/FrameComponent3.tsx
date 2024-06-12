import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.finalInner, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.sectionHeading2ServingParent}>
            <h3 className={styles.sectionHeading}>Our BLOG</h3>
            <h1
              className={styles.sectionHeading1}
            >{`Latest Product, Technologies, & Resources`}</h1>
          </div>
          <div className={styles.blogPostCardParent}>
            <div className={styles.blogPostCard}>
              <img
                className={styles.imageIcon}
                loading="lazy"
                alt=""
                src="/image@2x.png"
              />
              <div className={styles.content}>
                <div className={styles.headingAndSubheading}>
                  <b className={styles.subheading}>Design</b>
                  <div className={styles.headingAndText}>
                    <div className={styles.headingAndIcon}>
                      <h3 className={styles.heading}>{`Lorem ipsum dolor `}</h3>
                      <div className={styles.iconWrap}>
                        <img
                          className={styles.arrowUpRightIcon}
                          alt=""
                          src="/arrowupright.svg"
                        />
                      </div>
                    </div>
                    <p
                      className={styles.supportingText}
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor unt ut labore et dolore `}</p>
                  </div>
                </div>
                <div className={styles.avatarLabelGroup}>
                  <img
                    className={styles.avatarIcon}
                    loading="lazy"
                    alt=""
                    src="/avatar@2x.png"
                  />
                  <div className={styles.textAndSupportingText}>
                    <div className={styles.text}>Olivia Rhye</div>
                    <div className={styles.supportingText1}>01 Jun 2024</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.blogPostCard1}>
              <img className={styles.imageIcon1} alt="" src="/image-1@2x.png" />
              <div className={styles.content1}>
                <div className={styles.headingAndSubheading1}>
                  <b className={styles.subheading1}>Product</b>
                  <div className={styles.headingAndText1}>
                    <div className={styles.headingAndIcon1}>
                      <h3
                        className={styles.heading1}
                      >{`Lorem ipsum dolor `}</h3>
                      <div className={styles.iconWrap1}>
                        <img
                          className={styles.arrowUpRightIcon1}
                          alt=""
                          src="/arrowupright-1.svg"
                        />
                      </div>
                    </div>
                    <p
                      className={styles.supportingText2}
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor unt ut labore et dolore `}</p>
                  </div>
                </div>
                <div className={styles.avatarLabelGroup1}>
                  <img
                    className={styles.avatarIcon1}
                    alt=""
                    src="/avatar-1@2x.png"
                  />
                  <div className={styles.textAndSupportingText1}>
                    <div className={styles.text1}>Phoenix Baker</div>
                    <div className={styles.supportingText3}>01 Jun 2024</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.blogPostCard2}>
              <img className={styles.imageIcon2} alt="" src="/image-2@2x.png" />
              <div className={styles.content2}>
                <div className={styles.headingAndSubheading2}>
                  <b className={styles.subheading2}>Software Engineering</b>
                  <div className={styles.headingAndText2}>
                    <div className={styles.headingAndIcon2}>
                      <h3
                        className={styles.heading2}
                      >{`Lorem ipsum dolor `}</h3>
                      <div className={styles.iconWrap2}>
                        <img
                          className={styles.arrowUpRightIcon2}
                          alt=""
                          src="/arrowupright-2.svg"
                        />
                      </div>
                    </div>
                    <p
                      className={styles.supportingText4}
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor unt ut labore et dolore `}</p>
                  </div>
                </div>
                <div className={styles.avatarLabelGroup2}>
                  <img
                    className={styles.avatarIcon2}
                    alt=""
                    src="/avatar-2@2x.png"
                  />
                  <div className={styles.textAndSupportingText2}>
                    <div className={styles.text2}>Lana Steiner</div>
                    <div className={styles.supportingText5}>01 Jun 2024</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.blogPostCard3}>
              <img className={styles.imageIcon3} alt="" src="/image-3@2x.png" />
              <div className={styles.content3}>
                <div className={styles.headingAndSubheading3}>
                  <b className={styles.subheading3}>Management</b>
                  <div className={styles.headingAndText3}>
                    <div className={styles.headingAndIcon3}>
                      <h3
                        className={styles.heading3}
                      >{`Lorem ipsum dolor `}</h3>
                      <div className={styles.iconWrap3}>
                        <img
                          className={styles.arrowUpRightIcon3}
                          alt=""
                          src="/arrowupright-3.svg"
                        />
                      </div>
                    </div>
                    <p
                      className={styles.supportingText6}
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor unt ut labore et dolore `}</p>
                  </div>
                </div>
                <div className={styles.avatarLabelGroup3}>
                  <img
                    className={styles.avatarIcon3}
                    alt=""
                    src="/avatar-3@2x.png"
                  />
                  <div className={styles.textAndSupportingText3}>
                    <div className={styles.text3}>Alec Whitten</div>
                    <div className={styles.supportingText7}>01 Jun 2024</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.blogPostCard4}>
              <img className={styles.imageIcon4} alt="" src="/image-4@2x.png" />
              <div className={styles.content4}>
                <div className={styles.headingAndSubheading4}>
                  <b className={styles.subheading4}>Product</b>
                  <div className={styles.headingAndText4}>
                    <div className={styles.headingAndIcon4}>
                      <h3
                        className={styles.heading4}
                      >{`Lorem ipsum dolor `}</h3>
                      <div className={styles.iconWrap4}>
                        <img
                          className={styles.arrowUpRightIcon4}
                          alt=""
                          src="/arrowupright-1.svg"
                        />
                      </div>
                    </div>
                    <p
                      className={styles.supportingText8}
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor unt ut labore et dolore `}</p>
                  </div>
                </div>
                <div className={styles.avatarLabelGroup4}>
                  <img
                    className={styles.avatarIcon4}
                    alt=""
                    src="/avatar-4@2x.png"
                  />
                  <div className={styles.textAndSupportingText4}>
                    <div className={styles.text4}>Demi WIlkinson</div>
                    <div className={styles.supportingText9}>01 Jun 2024</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.blogPostCard5}>
              <img className={styles.imageIcon5} alt="" src="/image-5@2x.png" />
              <div className={styles.content5}>
                <div className={styles.headingAndSubheading5}>
                  <b className={styles.subheading5}>Design</b>
                  <div className={styles.headingAndText5}>
                    <div className={styles.headingAndIcon5}>
                      <h3
                        className={styles.heading5}
                      >{`Lorem ipsum dolor `}</h3>
                      <div className={styles.iconWrap5}>
                        <img
                          className={styles.arrowUpRightIcon5}
                          alt=""
                          src="/arrowupright-2.svg"
                        />
                      </div>
                    </div>
                    <p
                      className={styles.supportingText10}
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor unt ut labore et dolore `}</p>
                  </div>
                </div>
                <div className={styles.avatarLabelGroup5}>
                  <img
                    className={styles.avatarIcon5}
                    alt=""
                    src="/avatar-5@2x.png"
                  />
                  <div className={styles.textAndSupportingText5}>
                    <div className={styles.text5}>Candice Wu</div>
                    <div className={styles.supportingText11}>01 Jun 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.viewMoreWrapper}>
            <div className={styles.viewMore}>View More</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
