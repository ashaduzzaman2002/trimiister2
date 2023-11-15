import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const EventsDetailsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-outfit justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="bg-gradient  flex flex-col items-center justify-start w-full">
            <div className="h-[555px] md:h-[663px] md:px-5 relative w-full">
              <div className="h-[555px] md:h-[663px] m-auto w-full">
                <div className="h-[555px] md:h-[663px] m-auto w-full">
                  <Img
                    className="h-[555px] m-auto object-cover w-full"
                    src="images/img_1_555x1440.png"
                    alt="One"
                  />
                  <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[6%] w-[83%]">
                    <Header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
                    <div className="flex flex-row gap-3 items-start justify-start mt-[51px] w-[21%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-700 sm:text-xl"
                        size="txtOutfitRegular24"
                      >
                        Home
                      </Text>
                      <Img
                        className="h-[18px] mt-1.5 w-[18px]"
                        src="images/img_arrowright_gray_700.svg"
                        alt="arrowright"
                      />
                      <Text
                        className="text-2xl md:text-[22px] text-teal-500 sm:text-xl"
                        size="txtOutfitMedium24"
                      >
                        Event Details
                      </Text>
                    </div>
                    <Text
                      className="mt-[47px] sm:text-[32px] md:text-[38px] text-[42px] text-gray-900"
                      size="txtOutfitSemiBold42"
                    >
                      Events By Tristars
                    </Text>
                    <div className="flex md:flex-col flex-row gap-2.5 items-center justify-start mt-[5px] w-[51%] md:w-full">
                      <Line className="bg-teal-500 md:h-0.5 h-[49px] w-0.5 md:w-full" />
                      <Text
                        className="text-gray-600 text-xl w-[98%] sm:w-full"
                        size="txtOutfitRegular20Gray600"
                      >
                        Tristar Hospitals introduced in Surat the “ARFI”
                        technology the latest modality to diagnose early liver
                        failure and cirrhosis.
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[231px] mt-[31px] text-center text-xl"
                      shape="round"
                      color="teal_500"
                      size="md"
                      variant="fill"
                    >
                      Lean More Events
                    </Button>
                  </div>
                </div>
                <div className="absolute border-[19px] border-solid bottom-[2%] h-[389px] right-[9%] rotate-[90deg] rounded-[194px] teal_500_teal_500_00_border5 w-[388px]"></div>
              </div>
              <Img
                className="absolute bottom-[0] h-[371px] object-cover right-[11%] w-[24%]"
                src="images/img_portraitsmilingmaledoctor.png"
                alt="portraitsmiling"
              />
              <Img
                className="absolute bottom-[27%] h-[174px] right-[37%]"
                src="images/img_frame_deep_orange_a100.svg"
                alt="frame"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[11px] justify-start md:ml-[0] ml-[119px] mt-[121px] md:px-5">
          <Text
            className="md:ml-[0] ml-[9px] text-center text-teal-600 text-xl"
            size="txtOutfitSemiBold20"
          >
            Events
          </Text>
          <Text
            className="sm:text-[32px] md:text-[38px] text-[42px] text-center text-gray-900"
            size="txtOutfitSemiBold42"
          >
            Daily Exercised is Essential
          </Text>
        </div>
        <Text
          className="ml-32 md:ml-[0] mt-[11px] text-center text-gray-600 text-xl"
          size="txtOutfitRegular20"
        >
          27 August, 2019
        </Text>
        <div className="flex flex-col gap-8 items-center mt-[30px] md:px-10 px-32 sm:px-5 w-full">
          <div className="border-2 border-solid deep_orange_A100_01_deep_orange_A100_44_border flex flex-col items-center justify-start max-w-[1184px] mx-auto p-5 rounded-[32px] w-full">
            <Img
              className="h-[540px] md:h-auto object-cover rounded-[22px] w-full"
              src="images/img_rectangle4357.png"
              alt="rectangle4357"
            />
          </div>
          <Text
            className="leading-[28.00px] text-gray-600 text-lg w-full"
            size="txtOutfitRegular18"
          >
            That also the leap into electronic typesetting, remaining
            essentially unchanged. Etharums ser quidem rerum facilis dolores
            nemis omnis fugats vitaes nemo minima rerums unsers sadips amets.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem...
          </Text>
        </div>
        <Text
          className="ml-32 md:ml-[0] mt-5 text-gray-600 text-lg"
          size="txtOutfitRegular18"
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </Text>
        <div className="flex flex-col items-center mt-4 md:px-10 px-32 sm:px-5 w-full">
          <Text
            className="leading-[28.00px] text-gray-600 text-lg"
            size="txtOutfitRegular18"
          >
            <>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using &#39;Content
              here, content here&#39;, making it look like readable English.
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for
              &#39;lorem ipsum&#39; will uncover many web sites still in their
              infancy. Various versions have evolved over the years, sometimes
              by accident, sometimes on purpose (injected humour and the like).
              <br />
              Medic
            </>
          </Text>
        </div>
        <Text
          className="ml-32 md:ml-[0] mt-[58px] sm:text-[32px] md:text-[38px] text-[42px] text-center text-gray-900"
          size="txtOutfitSemiBold42"
        >
          Medical Surgery
        </Text>
        <div className="flex flex-col gap-4 items-center mt-5 md:px-10 px-32 sm:px-5 w-full">
          <Text
            className="leading-[28.00px] text-gray-600 text-lg w-full"
            size="txtOutfitRegular18"
          >
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent
            luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
            Nam liber tempor cum soluta nobis eleifend option congue nihil
            imperdiet doming id quod mazim placerat facer possim assum.
          </Text>
          <Text
            className="leading-[28.00px] text-gray-600 text-lg w-full"
            size="txtOutfitRegular18"
          >
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent
            luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
            Nam liber tempor cum soluta nobis eleifend option congue nihil
            imperdiet doming id quod mazim placerat facer possim assum.
          </Text>
        </div>
        <div className="flex md:flex-col flex-row gap-4 items-start justify-start ml-32 md:ml-[0] mt-8 md:px-5 w-[78%] md:w-full">
          <Button
            className="flex h-[30px] items-center justify-center mb-[26px] rounded-[50%] w-[30px]"
            shape="circle"
            color="teal_500_19"
            size="xs"
            variant="fill"
          >
            <Img
              className="h-4"
              src="images/img_frame_teal_500.svg"
              alt="frame_One"
            />
          </Button>
          <Text
            className="leading-[28.00px] text-gray-600 text-lg w-[96%] sm:w-full"
            size="txtOutfitRegular18"
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </Text>
        </div>
        <div className="flex md:flex-col flex-row gap-4 items-end justify-start ml-32 md:ml-[0] mt-4 md:px-5 w-[73%] md:w-full">
          <Button
            className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
            shape="circle"
            color="teal_500_19"
            size="xs"
            variant="fill"
          >
            <Img
              className="h-4"
              src="images/img_frame_teal_500.svg"
              alt="frame_Two"
            />
          </Button>
          <Text
            className="md:mt-0 mt-[5px] text-gray-600 text-lg"
            size="txtOutfitRegular18"
          >
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          </Text>
        </div>
        <div className="flex md:flex-col flex-row gap-4 items-start justify-start ml-32 md:ml-[0] mt-4 md:px-5 w-[78%] md:w-full">
          <Button
            className="flex h-[30px] items-center justify-center mb-[27px] rounded-[50%] w-[30px]"
            shape="circle"
            color="teal_500_19"
            size="xs"
            variant="fill"
          >
            <Img
              className="h-4"
              src="images/img_frame_teal_500.svg"
              alt="frame_Three"
            />
          </Button>
          <Text
            className="leading-[28.00px] text-gray-600 text-lg w-[96%] sm:w-full"
            size="txtOutfitRegular18"
          >
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent
            luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          </Text>
        </div>
        <div className="flex md:flex-col flex-row gap-4 items-start justify-start ml-32 md:ml-[0] mt-4 md:px-5 w-[73%] md:w-full">
          <Button
            className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
            shape="circle"
            color="teal_500_19"
            size="xs"
            variant="fill"
          >
            <Img
              className="h-4"
              src="images/img_frame_teal_500.svg"
              alt="frame_Four"
            />
          </Button>
          <Text
            className="md:mt-0 mt-1 text-gray-600 text-lg"
            size="txtOutfitRegular18"
          >
            Nam liber tempor cum soluta nobis eleifend option congue nihil
            imperdiet doming id quod mazim placerat facer possim assum.
          </Text>
        </div>
        <div className="flex flex-col items-center mt-4 w-full">
          <div className="flex md:flex-col flex-row gap-4 items-start justify-start max-w-[1127px] mx-auto md:px-5 w-full">
            <Button
              className="flex h-[30px] items-center justify-center mb-[27px] rounded-[50%] w-[30px]"
              shape="circle"
              color="teal_500_19"
              size="xs"
              variant="fill"
            >
              <Img
                className="h-4"
                src="images/img_frame_teal_500.svg"
                alt="frame_Five"
              />
            </Button>
            <Text
              className="sm:flex-1 leading-[28.00px] text-gray-600 text-lg w-[96%] sm:w-full"
              size="txtOutfitRegular18"
            >
              Typi non habent claritatem insitam; est usus legentis in iis qui
              facit eorum claritatem. Investigationes demonstraverunt lectores
              legere me lius quod ii legunt saepius.
            </Text>
          </div>
          <Text
            className="leading-[28.00px] mt-8 text-gray-600 text-lg w-[83%] sm:w-full"
            size="txtOutfitRegular18"
          >
            That also the leap into electronic typesetting, remaining
            essentially unchanged. Etharums ser quidem rerum facilis dolores
            nemis omnis fugats vitaes nemo minima rerums unsers sadips amets.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem. It
            is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </Text>
          <Footer className="bg-gray-900 flex items-center justify-center mt-[120px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default EventsDetailsPage;
