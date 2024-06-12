import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <footer className={[styles.lowerContentWrapper, className].join(" ")}>
      <div className={styles.lowerContent}>
        <div className={styles.contentLeft}>
          <div className={styles.imageBlock}>
            <div className={styles.imageContainer}>
              <div className={styles.imageBackgroundParent}>
                <div className={styles.imageBackground}>
                  <img
                    className={styles.contentImageIcon}
                    loading="lazy"
                    alt=""
                    src="/rectangle-5359@2x.png"
                  />
                </div>
                <p className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
              <div className={styles.buttonPanel}>
                <div className={styles.buttonContainerParent}>
                  <div className={styles.buttonContainer}>
                    <b className={styles.learnMore}>Useful Links</b>
                    <b className={styles.ticketsBooking}>Products</b>
                  </div>
                  <div className={styles.buttonIcon}>
                    <div className={styles.buttonIconChild} />
                    <div className={styles.buttonIconItem} />
                  </div>
                </div>
                <div className={styles.aboutAlyeskaPressParent}>
                  <p className={styles.aboutAlyeskaPressContainer}>
                    <span className={styles.home}>Home</span>
                    <span className={styles.about}>About</span>
                    <span className={styles.submitCvOnline}>
                      Submit CV Online
                    </span>
                    <span className={styles.conference}>Conference</span>
                    <span className={styles.library}>Library</span>
                    <span className={styles.directorsMassage}>
                      Director’s Massage
                    </span>
                    <span
                      className={styles.servicesSupport}
                    >{`Service's & Support`}</span>
                    <span className={styles.events}>Events</span>
                    <span className={styles.contactUs}>Contact Us</span>
                    <span className={styles.workWithBet}>
                      Work with Bet Medical
                    </span>
                  </p>
                  <p className={styles.product}>
                    <span className={styles.liftTickets}>Lift Tickets</span>
                    <span className={styles.seasonPasses}>Season Passes</span>
                    <span className={styles.vacationPackages}>
                      Vacation Packages
                    </span>
                  </p>
                </div>
              </div>
              <div className={styles.contentRight}>
                <div className={styles.contactInfo}>
                  <div className={styles.contactLinksParent}>
                    <div className={styles.contactLinks}>
                      <b className={styles.contactUs1}>Contact Us</b>
                      <b className={styles.social}>Social</b>
                    </div>
                    <div className={styles.linkIcon}>
                      <div className={styles.linkIconChild} />
                      <div className={styles.linkIconItem} />
                    </div>
                  </div>
                  <div className={styles.reservation}>
                    <div className={styles.bookingLabelsParent}>
                      <div className={styles.bookingLabels}>
                        <div className={styles.hotelReservation}>Office 1:</div>
                        <div className={styles.placeholderTwo}>
                          +91-44-28344639
                        </div>
                      </div>
                      <div className={styles.bookingLabels1}>
                        <div className={styles.ticketOffice}>Email:</div>
                        <div className={styles.div}>general@betmedical.com</div>
                      </div>
                      <div className={styles.hotelBooking}>
                        <div className={styles.hotelReservationParent}>
                          <div className={styles.hotelReservation1}>
                            Address:
                          </div>
                          <p className={styles.placeholderThree}>
                            1st Floor, Malles manor No.19 (Old No.8-A), Periyar
                            Road, T.Nagar, Chennai – 600 017, Tamilnadu, India.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.socialMedia}>
                      <div className={styles.platformOne}>
                        <div className={styles.bxlFacebookParent}>
                          <img
                            className={styles.bxlFacebookIcon}
                            loading="lazy"
                            alt=""
                            src="/bxlfacebook.svg"
                          />
                          <img
                            className={styles.instagramLogoIcon}
                            loading="lazy"
                            alt=""
                            src="/instagramlogo@2x.png"
                          />
                        </div>
                        <div className={styles.iconBackgroundOne}>
                          <img
                            className={styles.backgroundShapeOne}
                            loading="lazy"
                            alt=""
                            src="/rectangle-5364@2x.png"
                          />
                          <img
                            className={styles.backgroundShapeOne1}
                            loading="lazy"
                            alt=""
                            src="/rectangle-5365@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.platformTwo}>
                  <div className={styles.iconContainerTwoParent}>
                    <div className={styles.iconContainerTwo}>
                      <img
                        className={styles.bxlTwitterIcon}
                        loading="lazy"
                        alt=""
                        src="/bxltwitter.svg"
                      />
                      <img
                        className={styles.youtubeLogoIcon}
                        loading="lazy"
                        alt=""
                        src="/youtubelogo@2x.png"
                      />
                    </div>
                    <div className={styles.iconBackgroundTwo}>
                      <div className={styles.backgroundShapeTwo}>
                        <img
                          className={styles.backgroundShapeThree}
                          loading="lazy"
                          alt=""
                          src="/rectangle-5366@2x.png"
                        />
                        <img
                          className={styles.backgroundShapeThree1}
                          loading="lazy"
                          alt=""
                          src="/rectangle-5367@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.divider} />
        </div>
        <div className={styles.name}>
          <div className={styles.rahul}>
            © 2024 | Bet Medical | IcebergMalav | All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
