import Carousel from "react-bootstrap/Carousel";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button } from "react-bootstrap";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { ArrowRight } from "@mui/icons-material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Slider from "./Componenet/Slider";
import About from "./Componenet/About";
import App from "./App";
import Divider from "@mui/material/Divider";
import AOS from "aos";
import Skill from "./Componenet/Skill";
import Aboutsec from "./Componenet/Aboutsec";
import Home2 from "./Componenet/Home2";
import Nav10 from "./Componenet/Nav10";
import { useState } from "react";
import Nav11 from "./Nav11";
import { useMediaQuery, useTheme } from "@mui/material";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import Intro from "./videos/whatsapp.mp4";
import "./style.css";
// import First from "./First";
function CarouselFadeExample() {
  AOS.init();
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const Gridi = {
    background: "url(./1.jpg)",
  };
  const directionButtonse = (direction) => {
    return (
      <div>
        <span aria-hidden="true" className="arrow arrow-right next">
          <ArrowRightIcon
            className="arrow arrow-right next"
            style={{
              fontSize: "49px",
              backgroundColor: "red",
              borderRadius: "29px",
              position: "relative",
              left: "0px",
              overflow: "hidden",
            }}
          />
        </span>
      </div>
    );
  };
  const directionButtonsf = (direction) => {
    return (
      <div>
        <span aria-hidden="true" className="arrow arrow-left prev">
          <ArrowLeftIcon
            style={{
              fontSize: "49px",
              backgroundColor: "red",
              borderRadius: "29px",
              position: "relative",
              right: "10px",
              overflow: "hidden",
            }}
          />
        </span>
      </div>
    );
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}></div>
      {/* <img className="d-block w-100" src={require("./laptop-png-6759.png")} /> */}
      <div class="thumbnail" style={{ height: "60%", overflow: "hidden" }}>
        <img
          src={require("./Componenet/screen2.png")}
          style={{ width: "90%", display: "block" }}
        />
        <div class="caption0">
          <div style={{ textAlign: "start" }}>
            <Carousel
              fade={true}
              indicators={false}
              style={{
                width: "100%",
                height: "800px",
              }}
              nextIcon={directionButtonse("Next")}
              prevIcon={directionButtonsf("Previous")}
            >
              <Carousel.Item
                style={{
                  width: "100%",
                  // overflow: "auto",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item lg={6} style={{ height: "1000px" }}>
                    <Item>
                      <div style={{ height: "1000px" }}>
                        <img
                          className="d-block w-100"
                          src={require("./123.gif")}
                          alt="First slide"
                          style={{ height: "60%" }}
                        />
                      </div>
                    </Item>
                  </Grid>
                  <Grid item lg={6}>
                    <Item>
                      <div
                        style={{
                          height: "550px",
                          textAlign: "center",
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          className="About3"
                          style={{
                            height: "500px",
                            overflowY: "scroll",
                            overflowX: "hidden",
                          }}
                        >
                          <h1>What I Build</h1>{" "}
                          <div className="about4">
                            <h3 data-aos="fade-down" data-aos-delay="300">
                              {" "}
                              Connected to Database
                            </h3>{" "}
                          </div>
                          <p data-aos="fade-up" data-aos-delay="500">
                            <span>How to connect </span> development approach
                            that creates dynamic changes to creates development
                            approach that creates dynamic changes to the
                            appearance of a elopment approach that creates creen
                            size and orientation of the device being used to
                            development approach that creates dynamic changes to
                            the appearance of a elopment approach that creates
                            development approach that creates dynamic changes to
                            the appearance of a elopment approach that creates
                            creen size and orientation of the device being used
                            to creen size and orientation of the device being
                            used to development approach that creates dynamic
                            changes to the appearance of a elopment approach
                            that creates creen size and orientation of the
                            device
                          </p>{" "}
                        </div>
                      </div>
                    </Item>
                  </Grid>
                </Grid>
              </Carousel.Item>
              <Carousel.Item
                style={{
                  width: "100%",
                  // overflow: "auto",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Grid
                  container
                  spacing={2}
                  data-aos="fade-down"
                  data-aos-delay="300"
                >
                  <Grid
                    item
                    lg={6}
                    style={{ height: "1000px" }}
                    data-aos="flip-left"
                  >
                    <Item>
                      <div style={{ height: "1000px" }} data-aos="flip-left">
                        <img
                          className="d-block w-100 "
                          src={require("./Componenet/css/Data Loading Animation.gif")}
                          alt="First slide"
                          style={{ height: "60%" }}
                        />
                      </div>
                    </Item>
                  </Grid>
                  <Grid item lg={6}>
                    <Item data-aos="flip-left">
                      <div
                        style={{
                          height: "550px",
                          textAlign: "center",
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          className="About3"
                          style={{
                            height: "500px",
                            overflowY: "scroll",
                            overflowX: "hidden",
                          }}
                        >
                          <h1>What I Build</h1>{" "}
                          <div className="about4">
                            <h3 data-aos="fade-down" data-aos-delay="300">
                              {" "}
                              Responsive Web Design
                            </h3>{" "}
                          </div>
                          <p data-aos="fade-up" data-aos-delay="500">
                            <span>Responsive Design </span> development approach
                            that creates dynamic changes to creates development
                            approach that creates dynamic changes to the
                            appearance of a elopment approach that creates creen
                            size and orientation of the device being used to
                            development approach that creates dynamic changes to
                            the appearance of a elopment approach that creates
                            development approach that creates dynamic changes to
                            the appearance of a elopment approach that creates
                            creen size and orientation of the device being used
                            to creen size and orientation of the device being
                            size and orientation of the device being used to
                            development approach that creates dynamic changes to
                            the appearance of a elopment approach that creates
                            development approach that creates dynamic changes to
                            the appearance of a elopment approach that creates
                            creen size and orientation of the device being used
                            to creen size and orientation of the device being
                            used to development approach that creates dynamic
                            changes to the appearance of a elopment approach
                            that creates creen size and orientation of the
                            device
                          </p>{" "}
                        </div>
                      </div>
                    </Item>
                  </Grid>
                </Grid>
              </Carousel.Item>
              <Carousel.Item
                style={{
                  width: "100%",
                  // overflow: "auto",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item lg={6} style={{ height: "1000px" }}>
                    <Item>
                      <div style={{ height: "1000px" }}>
                        <img
                          className="d-block w-100"
                          src={require("./css/2017 Design Trends Guide.gif")}
                          alt="First slide"
                          style={{ height: "60%" }}
                        />
                      </div>
                    </Item>
                  </Grid>
                  <Grid item lg={6}>
                    <Item>
                      <div
                        style={{
                          height: "550px",
                          textAlign: "center",
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          className="About3"
                          style={{
                            height: "500px",
                            overflowY: "scroll",
                            overflowX: "hidden",
                          }}
                        >
                          <h1>What I Build</h1>{" "}
                          <div className="about4">
                            <h3 data-aos="fade-down" data-aos-delay="300">
                              {" "}
                              SEO (Search engigne organization)
                            </h3>{" "}
                          </div>
                          <p data-aos="fade-up" data-aos-delay="500">
                            <span> SEO...... </span> development approach that
                            creates dynamic changes to creates development
                            approach that creates dynamic changes to the
                            appearance of a elopment approach that creates creen
                            size and orientation of the device being used to
                            development approach that creates dynamic changes to
                            the appearance of a elopment approach that creates
                            development approach that creates dynamic changes to
                            the appearance of a elopment approach that creates
                            creen size and orientation of the device being used
                            to creen size and orientation of the device being
                            size and orientation of the device being used to
                            development approach that creates dynamic changes to
                            the appearance of a elopment approach that creates
                            development approach that creates dynamic changes to
                            the appearance of a elopment approach that creates
                            creen size and orientation of the device being used
                            to creen size and orientation of the device being
                            used to development approach that creates dynamic
                            changes to the appearance of a elopment approach
                            that creates creen size and orientation of the
                            device
                          </p>{" "}
                        </div>
                      </div>
                    </Item>
                  </Grid>
                </Grid>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarouselFadeExample;
