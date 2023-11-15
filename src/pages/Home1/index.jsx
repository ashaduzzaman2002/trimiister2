import React from "react";

import { Button, Img, Line, List, Text } from "components";

const Home1Page = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-outfit items-start justify-start mx-auto overflow-auto w-full">
        <div className="flex flex-col md:gap-10 gap-[120px] items-center pr-[132px] md:px-5 w-full">
          <div className="bg-gradient  flex flex-col gap-[13px] items-center justify-start p-8 sm:px-5 w-full">
            <header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
              <Img
                className="md:flex-1 h-10 sm:h-auto ml-6 md:ml-[0] md:mt-0 my-6 object-cover w-[12%] md:w-full"
                src="images/img_image119.png"
                alt="image119"
              />
              <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[72px] md:mt-0 my-[30px] w-[55%] md:w-full">
                <ul className="flex sm:flex-col flex-row md:hidden items-start justify-between w-full common-row-list">
                  <li>
                    <a href="javascript:">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="hover:font-medium text-base text-teal-500"
                          size="txtOutfitMedium16"
                        >
                          Home
                        </Text>
                        <Line className="bg-teal-500 h-0.5 mt-1 w-[70%]" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="hover:font-medium text-base text-gray-700 hover:text-teal-500"
                    >
                      <Text size="txtOutfitRegular16">About Us</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="hover:font-medium mt-[3px] text-base text-gray-700 hover:text-teal-500"
                    >
                      <Text size="txtOutfitRegular16">Departments</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="hover:font-medium mt-[3px] text-base text-gray-700 hover:text-teal-500"
                    >
                      <Text size="txtOutfitRegular16">Hospitality</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="hover:font-medium text-base text-gray-700 hover:text-teal-500"
                    >
                      <Text size="txtOutfitRegular16">Mediclaim</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="hover:font-medium text-base text-gray-700 hover:text-teal-500"
                    >
                      <Text size="txtOutfitRegular16">Media</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="hover:font-medium text-base text-gray-700 hover:text-teal-500"
                    >
                      <Text size="txtOutfitRegular16">Contact Us</Text>
                    </a>
                  </li>
                </ul>
              </div>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[206px] md:ml-[0] ml-[72px] mr-6 md:mt-0 my-4 text-center text-xl"
                shape="round"
                color="teal_500"
                size="md"
                variant="outline"
              >
                Free Consultation
              </Button>
            </header>
            <div className="md:h-[1127px] h-[603px] sm:h-[641px] mb-[38px] relative w-[87%] md:w-full">
              <div className="bg-deep_orange-A100 h-[72px] ml-[238px] mt-[93px] rounded-[50%] w-[72px]"></div>
              <div className="absolute md:h-[1089px] h-[603px] inset-[0] justify-center m-auto w-full">
                <div className="flex md:flex-col flex-row gap-8 h-full items-start justify-between m-auto w-full">
                  <div className="flex md:flex-1 flex-col gap-[41px] items-start justify-start md:mt-0 mt-24 w-[49%] md:w-full">
                    <div className="flex flex-col gap-[22px] items-start justify-start w-full">
                      <div className="flex flex-col gap-4 items-center justify-start w-full">
                        <Text
                          className="leading-[68.00px] sm:text-[44px] md:text-[50px] text-[58px] text-gray-900 w-full"
                          size="txtOutfitSemiBold58"
                        >
                          The Most Complete Health Solution In Your Hands
                        </Text>
                        <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-[99%] md:w-full">
                          <Line className="bg-teal-500 sm:h-0.5 h-[49px] sm:mt-0 my-[5px] w-0.5 sm:w-full" />
                          <Text
                            className="leading-[150.00%] text-gray-600 text-xl w-[98%] sm:w-full"
                            size="txtOutfitRegular20"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris eget eleifend est. Sed dictum semper
                            arcu vel efficitur.
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[264px] text-center text-xl"
                        shape="round"
                        color="teal_500"
                        size="md"
                        variant="fill"
                      >
                        Book An Appointment
                      </Button>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-[67%] md:w-full">
                      <div className="flex relative w-[56%] sm:w-full">
                        <div className="flex my-auto w-[82%]">
                          <div className="flex my-auto w-[78%]">
                            <div className="flex my-auto w-[70%]">
                              <Img
                                className="h-[54px] my-auto rounded-[50%] w-[54px]"
                                src="images/img_ellipse203.png"
                                alt="ellipse203"
                              />
                              <Img
                                className="h-[54px] ml-[-14px] my-auto object-cover rounded-[27px] w-[53px] z-[1]"
                                src="images/img_ellipse204.png"
                                alt="ellipse204"
                              />
                            </div>
                            <Img
                              className="h-[54px] ml-[-14px] my-auto rounded-[50%] w-[54px] z-[1]"
                              src="images/img_ellipse205.png"
                              alt="ellipse205"
                            />
                          </div>
                          <Img
                            className="h-[54px] ml-[-14px] my-auto object-cover rounded-[27px] w-[53px] z-[1]"
                            src="images/img_ellipse206.png"
                            alt="ellipse206"
                          />
                        </div>
                        <Img
                          className="h-[54px] ml-[-14px] my-auto rounded-[50%] w-[54px] z-[1]"
                          src="images/img_ellipse207.png"
                          alt="ellipse207"
                        />
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-[39%] sm:w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="text-teal-500 text-xl"
                            size="txtOutfitBold20"
                          >
                            4.9
                          </Text>
                          <Line className="bg-teal-500 h-[18px] my-[3px] w-px" />
                          <Img
                            className="h-5 mt-0.5"
                            src="images/img_group1000003409.svg"
                            alt="group1000003409"
                          />
                        </div>
                        <Text
                          className="text-base text-gray-600"
                          size="txtOutfitRegular16Gray600"
                        >
                          32k Total Review
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[603px] relative w-[49%] md:w-full">
                    <Img
                      className="absolute h-[150px] left-[0] top-1/4"
                      src="images/img_frame.svg"
                      alt="frame"
                    />
                    <div className="flex flex-row sm:gap-10 h-full items-start justify-between mt-[58px] mx-auto w-[91%]">
                      <Button
                        className="flex h-12 items-center justify-center mt-2.5 w-12"
                        shape="circle"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          className="h-6"
                          src="images/img_television.svg"
                          alt="television"
                        />
                      </Button>
                      <Button
                        className="flex h-12 items-center justify-center mb-2.5 w-12"
                        shape="circle"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          className="h-6"
                          src="images/img_clock.svg"
                          alt="clock"
                        />
                      </Button>
                    </div>
                    <div className="absolute h-[603px] inset-[0] justify-center m-auto w-[97%] sm:w-full">
                      <div className="absolute bg-gradient1  bottom-[0] h-[559px] inset-x-[0] mx-auto rotate-[90deg] rounded-[279px] w-[558px]"></div>
                      <div className="absolute h-[603px] inset-[0] justify-center m-auto w-[94%] sm:w-full">
                        <Img
                          className="h-[603px] m-auto object-cover rounded-bl-[260px] rounded-br-[236px] rounded-tl-[243px] rounded-tr-[243px] w-full"
                          src="images/img_portraitsmilin.png"
                          alt="portraitsmilin"
                        />
                        <Img
                          className="absolute h-[85px] right-[5%] top-[32%] w-[85px]"
                          src="images/img_frame_white_a700.svg"
                          alt="frame_One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[1%] flex flex-col items-center justify-start right-[34%] w-[24%]">
                  <div className="bg-white-A700_84 border border-solid border-white-A700_21 flex flex-col items-center justify-start p-4 rounded-lg w-full">
                    <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-900_01 text-sm"
                            size="txtOutfitMedium14"
                          >
                            Dr.Setha Wilsion
                          </Text>
                          <Text
                            className="mt-1 text-gray-600 text-xs"
                            size="txtOutfitRegular12"
                          >
                            Heart Surgeon London, England
                          </Text>
                        </div>
                        <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                          <Img
                            className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                            src="images/img_ellipse210.png"
                            alt="ellipse210"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row gap-[25px] items-center justify-between w-full">
                        <Text
                          className="text-teal-500 text-xs"
                          size="txtOutfitMedium12"
                        >
                          Available For You Need
                        </Text>
                        <Button
                          className="cursor-pointer min-w-[96px] rounded text-center text-xs"
                          color="teal_600"
                          size="xs"
                          variant="fill"
                        >
                          Appointment
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[58px] items-center justify-start w-[83%] md:w-full">
            <div className="flex flex-col gap-[5px] items-center justify-start">
              <Text
                className="text-center text-teal-600 text-xl"
                size="txtOutfitSemiBold20"
              >
                How It’s Works
              </Text>
              <Text
                className="leading-[56.00px] sm:text-[32px] md:text-[38px] text-[42px] text-center text-gray-900 w-full"
                size="txtOutfitSemiBold42"
              >
                Quick Solution For Scheduling With Doctor
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[74px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-[100px] w-[100px]"
                  src="images/img_volume.svg"
                  alt="volume"
                />
                <Text
                  className="mt-6 text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                  size="txtOutfitSemiBold24"
                >
                  Find Doctor
                </Text>
                <Text
                  className="leading-[24.00px] mt-2 text-base text-center text-gray-600 w-full"
                  size="txtOutfitRegular16Gray600"
                >
                  We’re Here To Help Whenever You Feet, But Keeping You Healthy
                  Is Our Better Priority
                </Text>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-[100px] w-[100px]"
                  src="images/img_forward.svg"
                  alt="forward"
                />
                <Text
                  className="mt-6 text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                  size="txtOutfitSemiBold24"
                >
                  Check Doctor Profile
                </Text>
                <Text
                  className="leading-[24.00px] mt-2 text-base text-center text-gray-600 w-full"
                  size="txtOutfitRegular16Gray600"
                >
                  We’re Here To Help Whenever You Feet, But Keeping You Healthy
                  Is Our Better Priority
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-[27px] items-center justify-start w-full">
                <Img
                  className="h-[100px] w-[100px]"
                  src="images/img_floatingicon.svg"
                  alt="floatingicon"
                />
                <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                    size="txtOutfitSemiBold24"
                  >
                    Schedule Appointment
                  </Text>
                  <Text
                    className="leading-[24.00px] text-base text-center text-gray-600 w-[98%] sm:w-full"
                    size="txtOutfitRegular16Gray600"
                  >
                    We’re Here To Help Whenever You Feet, But Keeping You
                    Healthy Is Our Better Priority
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-[100px] w-[100px]"
                  src="images/img_close.svg"
                  alt="close"
                />
                <Text
                  className="mt-6 text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                  size="txtOutfitSemiBold24"
                >
                  Get Your Solution
                </Text>
                <Text
                  className="leading-[24.00px] mt-2 text-base text-center text-gray-600 w-full"
                  size="txtOutfitRegular16Gray600"
                >
                  We’re Here To Help Whenever You Feet, But Keeping You Healthy
                  Is Our Better Priority
                </Text>
              </div>
            </List>
          </div>
          <div className="bg-gray-100 md:h-[1176px] sm:h-[451px] h-[611px] p-[47px] md:px-10 sm:px-5 relative w-full">
            <div className="absolute flex md:flex-col flex-row md:gap-5 h-max inset-[0] items-center justify-center m-auto w-[83%]">
              <div className="flex flex-col items-center justify-start w-[31%] md:w-full">
                <div className="bg-gradient2  flex md:h-[408px] h-[451px] justify-end sm:pl-5 pl-[26px] pt-[26px] relative rounded-tl-[190px] w-full">
                  <Img
                    className="h-[408px] ml-auto mt-auto object-cover w-[93%]"
                    src="images/img_imageprofessio.png"
                    alt="imageprofessio"
                  />
                  <Img
                    className="absolute h-[81px] right-[8%] top-[13%]"
                    src="images/img_alarm.svg"
                    alt="alarm"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start ml-10 md:ml-[0] w-2/5 md:w-full">
                <div className="flex flex-col gap-[5px] items-start justify-start">
                  <Text
                    className="text-center text-teal-600 text-xl"
                    size="txtOutfitSemiBold20"
                  >
                    About Us
                  </Text>
                  <Text
                    className="leading-[52.00px] sm:text-[32px] md:text-[38px] text-[42px] text-gray-900 w-full"
                    size="txtOutfitMedium42"
                  >
                    We have dedicated doctor with the core mission to help
                  </Text>
                </div>
                <div className="flex flex-col gap-5 items-start justify-start mt-8 w-full">
                  <div className="flex sm:flex-col flex-row gap-3 items-start justify-start w-full">
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
                      className="sm:mt-0 mt-[3px] text-gray-600 text-xl"
                      size="txtOutfitRegular20"
                    >
                      24/7 medical service through online and offline.
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-3 items-start justify-start w-full">
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
                        alt="frame_Three"
                      />
                    </Button>
                    <Text
                      className="sm:mt-0 mt-[3px] text-gray-600 text-xl"
                      size="txtOutfitRegular20"
                    >
                      Using modern technology to diagnostic disease.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-start justify-start w-4/5 md:w-full">
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
                      className="mt-[3px] text-gray-600 text-xl"
                      size="txtOutfitRegular20"
                    >
                      Easy and flexible to appoint a doctor.
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[264px] mt-[42px] text-center text-xl"
                  shape="round"
                  color="teal_500"
                  size="md"
                  variant="fill"
                >
                  Learn More About Us
                </Button>
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[42px] w-[24%] md:w-full">
                <div className="h-[281px] relative w-full">
                  <Img
                    className="h-[281px] m-auto object-cover w-full"
                    src="images/img_rectangle4324.png"
                    alt="rectangle4324"
                  />
                  <div className="absolute bg-black-900_66 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[94px] md:px-10 sm:px-5 w-full">
                    <Img
                      className="h-[85px] my-1 w-[85px]"
                      src="images/img_play.svg"
                      alt="play"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[90px] right-[18%] top-[9%] w-[90px]"
              src="images/img_frame_teal_600.svg"
              alt="frame_Five"
            />
            <Img
              className="absolute bottom-[8%] h-[76px] right-[31%] w-[76px]"
              src="images/img_frame_teal_600_76x76.svg"
              alt="frame_Six"
            />
          </div>
        </div>
        <div className="flex flex-col items-end mt-[120px] pl-[73px] md:px-5 w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col items-center justify-start w-[92%] md:w-full">
              <div className="flex flex-col gap-[11px] items-center justify-start">
                <Text
                  className="text-center text-teal-600 text-xl"
                  size="txtOutfitSemiBold20"
                >
                  Our Services
                </Text>
                <Text
                  className="sm:text-[32px] md:text-[38px] text-[42px] text-center text-gray-900"
                  size="txtOutfitSemiBold42"
                >
                  Explore Our Services
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between mt-[53px] w-full">
                <div className="md:h-[206px] h-[246px] relative w-[24%] md:w-full">
                  <Img
                    className="absolute h-[119px] left-[0] top-[3%]"
                    src="images/img_frame_light_blue_a400.svg"
                    alt="frame_Seven"
                  />
                  <div className="absolute md:h-[206px] h-[246px] inset-y-[0] my-auto right-[0] w-[82%]">
                    <div className="absolute bg-blue_gray-50 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-7 sm:px-5 rounded-lg w-full">
                      <div className="flex flex-col gap-[5px] items-center justify-start mb-1 mt-[38px]">
                        <Text
                          className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                          size="txtOutfitSemiBold24"
                        >
                          Cardiology
                        </Text>
                        <Text
                          className="leading-[24.00px] text-base text-center text-gray-600 w-full"
                          size="txtOutfitRegular16Gray600"
                        >
                          We are providing the cerdiology services for our
                          patient that very much.{" "}
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[78px] inset-x-[0] mx-auto top-[0] w-[78px]"
                      src="images/img_camera.svg"
                      alt="camera"
                    />
                  </div>
                </div>
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[84%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="md:h-[206px] h-[246px] relative w-full">
                    <div className="absolute bg-red-50 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-7 sm:px-5 rounded-lg w-full">
                      <div className="flex flex-col gap-[5px] items-center justify-start mb-1 mt-[38px]">
                        <Text
                          className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                          size="txtOutfitSemiBold24"
                        >
                          Neurology
                        </Text>
                        <Text
                          className="leading-[24.00px] text-base text-center text-gray-600 w-full"
                          size="txtOutfitRegular16Gray600"
                        >
                          We are providing the cerdiology services for our
                          patient that very much.{" "}
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[78px] inset-x-[0] mx-auto top-[0] w-[78px]"
                      src="images/img_rewind.svg"
                      alt="rewind"
                    />
                  </div>
                  <div className="md:h-[206px] h-[246px] relative w-full">
                    <div className="absolute bg-blue_gray-50 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-7 sm:px-5 rounded-lg w-full">
                      <div className="flex flex-col gap-[5px] items-center justify-start mb-1 mt-[38px]">
                        <Text
                          className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                          size="txtOutfitSemiBold24"
                        >
                          Orthopedics
                        </Text>
                        <Text
                          className="leading-[24.00px] text-base text-center text-gray-600 w-full"
                          size="txtOutfitRegular16Gray600"
                        >
                          We are providing the cerdiology services for our
                          patient that very much.{" "}
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[78px] inset-x-[0] mx-auto top-[0] w-[78px]"
                      src="images/img_location.svg"
                      alt="location"
                    />
                  </div>
                  <div className="md:h-[206px] h-[246px] relative w-full">
                    <div className="absolute bg-red-50 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-7 sm:px-5 rounded-lg w-full">
                      <div className="flex flex-col gap-[5px] items-center justify-start mb-1 mt-[38px]">
                        <Text
                          className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                          size="txtOutfitSemiBold24"
                        >
                          Radiology
                        </Text>
                        <Text
                          className="leading-[24.00px] text-base text-center text-gray-600 w-full"
                          size="txtOutfitRegular16Gray600"
                        >
                          We are providing the cerdiology services for our
                          patient that very much.{" "}
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[78px] inset-x-[0] mx-auto top-[0] w-[78px]"
                      src="images/img_rewind_white_a700.svg"
                      alt="rewind"
                    />
                  </div>
                  <div className="md:h-[206px] h-[246px] relative w-full">
                    <div className="absolute bg-blue_gray-50 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-7 sm:px-5 rounded-lg w-full">
                      <div className="flex flex-col gap-[5px] items-center justify-start mb-1 mt-[38px]">
                        <Text
                          className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                          size="txtOutfitSemiBold24"
                        >
                          Surgery
                        </Text>
                        <Text
                          className="leading-[24.00px] text-base text-center text-gray-600 w-full"
                          size="txtOutfitRegular16Gray600"
                        >
                          We are providing the cerdiology services for our
                          patient that very much.{" "}
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[78px] inset-x-[0] mx-auto top-[0] w-[78px]"
                      src="images/img_camera_white_a700.svg"
                      alt="camera"
                    />
                  </div>
                </List>
              </div>
              <Img
                className="h-[38px] mt-[42px]"
                src="images/img_clock_teal_500.svg"
                alt="clock_One"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[120px] items-center mt-[120px] pr-[132px] md:px-5 w-full">
          <div className="bg-gradient3  flex flex-col items-center justify-end p-[73px] md:px-10 sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[69px] items-center justify-start mt-[7px] w-[92%] md:w-full">
              <div className="md:h-[441px] h-[459px] relative w-[45%] md:w-full">
                <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[0] my-auto w-[89%]">
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="md:ml-[0] ml-[5px] text-center text-teal-600 text-xl"
                      size="txtOutfitSemiBold20"
                    >
                      Feature
                    </Text>
                    <Text
                      className="leading-[52.00px] mt-1 sm:text-[32px] md:text-[38px] text-[42px] text-gray-900 w-full"
                      size="txtOutfitMedium42"
                    >
                      Consultation with your best doctor anywhere and anytime
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] mt-3.5 text-gray-600 text-lg w-full"
                    size="txtOutfitRegular18"
                  >
                    Now you can make an appointment with your doctor anywhere
                    and anytime via online booking easier.
                  </Text>
                  <div className="flex flex-row items-center justify-start mt-[34px] w-[72%] md:w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-teal-600"
                        size="txtOutfitSemiBold32"
                      >
                        98%
                      </Text>
                      <Text
                        className="mt-[3px] text-base text-gray-600"
                        size="txtOutfitRegular16Gray600"
                      >
                        Satisfaction rate
                      </Text>
                    </div>
                    <Line className="bg-black-900_4c h-[58px] ml-[52px] my-1 w-px" />
                    <div className="flex flex-col gap-[5px] items-start justify-start ml-[51px]">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-teal-600"
                        size="txtOutfitSemiBold32"
                      >
                        25M
                      </Text>
                      <Text
                        className="text-base text-gray-600"
                        size="txtOutfitRegular16Gray600"
                      >
                        Registered users
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[227px] mt-[30px] text-center text-xl"
                    shape="round"
                    color="teal_500"
                    size="md"
                    variant="fill"
                  >
                    Let’s Get Started
                  </Button>
                </div>
                <Img
                  className="absolute bottom-[0] h-[115px] right-[0] w-[116px]"
                  src="images/img_group.svg"
                  alt="group"
                />
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start w-1/2 md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                    <Img
                      className="sm:flex-1 h-[248px] md:h-auto object-cover w-1/2 sm:w-full"
                      src="images/img_rectangle4329.png"
                      alt="rectangle4329"
                    />
                    <div className="bg-deep_orange-A100 flex sm:flex-1 flex-col gap-4 items-center justify-end p-3.5 rounded-bl-[113px] w-1/2 sm:w-full">
                      <Img
                        className="h-11 mt-[45px] w-11"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <div className="h-[113px] md:h-[67px] relative w-[73%]">
                        <Text
                          className="absolute left-[0] text-[22px] text-center sm:text-lg text-white-A700 md:text-xl top-[0] w-[77%] sm:w-full"
                          size="txtOutfitMedium22"
                        >
                          Easy Online Booking Here
                        </Text>
                        <Img
                          className="absolute bottom-[0] h-[67px] right-[0]"
                          src="images/img_fire.svg"
                          alt="fire"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                    <div className="bg-teal-500 md:h-[116px] h-[247px] p-[11px] relative rounded-tr-[113px] w-1/2 sm:w-full">
                      <div className="absolute flex flex-col gap-4 inset-x-[0] items-center justify-start mx-auto top-[21%] w-[62%]">
                        <Img
                          className="h-11 w-11"
                          src="images/img_user.svg"
                          alt="user"
                        />
                        <Text
                          className="text-[22px] text-center sm:text-lg text-white-A700 md:text-xl w-full"
                          size="txtOutfitMedium22"
                        >
                          Served Directly By Experts
                        </Text>
                      </div>
                      <Img
                        className="absolute bottom-[4%] h-[67px] right-[7%]"
                        src="images/img_fire.svg"
                        alt="fire_One"
                      />
                    </div>
                    <Img
                      className="sm:flex-1 h-[247px] md:h-auto object-cover w-1/2 sm:w-full"
                      src="images/img_rectangle4332.png"
                      alt="rectangle4332"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[83%] md:w-full">
            <div className="flex flex-col gap-[11px] items-center justify-start">
              <Text
                className="text-center text-teal-600 text-xl"
                size="txtOutfitSemiBold20"
              >
                Our Doctors
              </Text>
              <Text
                className="sm:text-[32px] md:text-[38px] text-[42px] text-center text-gray-900"
                size="txtOutfitSemiBold42"
              >
                Meet Our Top Rated Doctor
              </Text>
              <Text
                className="text-center text-gray-600 text-lg w-full"
                size="txtOutfitRegular18"
              >
                You will be handled by a team of expert doctors who have more
                than 10 years experience in their fields and will get the best
                solution for problem
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[58px] w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="bg-blue_gray-50 flex flex-col items-center justify-start pt-7 sm:px-5 px-7 rounded-tl-[134px] rounded-tr-[134px] w-full">
                  <Img
                    className="h-[241px] md:h-auto object-cover w-[92%]"
                    src="images/img_drmitapasswala.png"
                    alt="drmitapasswala"
                  />
                </div>
                <div className="bg-white-A700 flex flex-col gap-[15px] items-start justify-start p-[15px] shadow-bs w-full">
                  <Text
                    className="text-center text-gray-900 text-xl"
                    size="txtOutfitSemiBold20Gray900"
                  >
                    Dr. Mita Passwala
                  </Text>
                  <div className="flex flex-row items-end justify-between w-full">
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[104px] rounded-md text-center text-sm"
                      color="blue_gray_50"
                      size="xs"
                      variant="fill"
                    >
                      Cardiologist
                    </Button>
                    <div className="flex flex-row items-start justify-evenly my-1">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_star.svg"
                        alt="star"
                      />
                      <Text
                        className="text-base text-black-900 text-center"
                        size="txtOutfitMedium16Black900"
                      >
                        <span className="text-black-900 font-outfit font-semibold">
                          4.8
                        </span>
                        <span className="text-gray-600 font-outfit font-normal">
                          (250)
                        </span>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start mb-0.5 w-[79%] md:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_location_gray_600.svg"
                      alt="location"
                    />
                    <Text
                      className="text-base text-center text-gray-600"
                      size="txtOutfitRegular16Gray600"
                    >
                      Newyork Hospital, USA
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="bg-gray-50 flex flex-col items-center justify-start pt-7 sm:px-5 px-7 rounded-tl-[134px] rounded-tr-[134px] w-full">
                  <Img
                    className="h-[241px] md:h-auto object-cover w-[92%]"
                    src="images/img_drsuchayparikh.png"
                    alt="drsuchayparikh"
                  />
                </div>
                <div className="bg-white-A700 flex flex-col items-start justify-start p-[15px] shadow-bs w-full">
                  <Text
                    className="mt-0.5 text-center text-gray-900 text-xl"
                    size="txtOutfitSemiBold20Gray900"
                  >
                    Dr. Suchay Parikh
                  </Text>
                  <div className="flex flex-row items-end justify-between mt-[13px] w-full">
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[104px] rounded-md text-center text-sm"
                      color="blue_gray_50"
                      size="xs"
                      variant="fill"
                    >
                      Cardiologist
                    </Button>
                    <div className="flex flex-row items-start justify-evenly my-1">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_star.svg"
                        alt="star"
                      />
                      <Text
                        className="text-base text-black-900 text-center"
                        size="txtOutfitMedium16Black900"
                      >
                        <span className="text-black-900 font-outfit font-semibold">
                          4.8
                        </span>
                        <span className="text-gray-600 font-outfit font-normal">
                          (250)
                        </span>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start mb-0.5 mt-4 w-[79%] md:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_location_gray_600.svg"
                      alt="location"
                    />
                    <Text
                      className="text-base text-center text-gray-600"
                      size="txtOutfitRegular16Gray600"
                    >
                      Newyork Hospital, USA
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="bg-blue_gray-50 flex flex-col items-center justify-start pt-[38px] sm:px-5 px-[38px] rounded-tl-[134px] rounded-tr-[134px] w-full">
                  <Img
                    className="h-[225px] md:h-auto mt-1.5 object-cover w-full"
                    src="images/img_drarunmehra1.png"
                    alt="drarunmehraOne"
                  />
                </div>
                <div className="bg-white-A700 flex flex-col gap-[15px] items-start justify-start p-[15px] shadow-bs w-full">
                  <Text
                    className="text-center text-gray-900 text-xl"
                    size="txtOutfitSemiBold20Gray900"
                  >
                    Dr. Arun Mehra
                  </Text>
                  <div className="flex flex-row items-end justify-between w-full">
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[104px] rounded-md text-center text-sm"
                      color="blue_gray_50"
                      size="xs"
                      variant="fill"
                    >
                      Cardiologist
                    </Button>
                    <div className="flex flex-row items-start justify-evenly my-1">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_star.svg"
                        alt="star"
                      />
                      <Text
                        className="text-base text-black-900 text-center"
                        size="txtOutfitMedium16Black900"
                      >
                        <span className="text-black-900 font-outfit font-semibold">
                          4.8
                        </span>
                        <span className="text-gray-600 font-outfit font-normal">
                          (250)
                        </span>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start mb-0.5 w-[79%] md:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_location_gray_600.svg"
                      alt="location"
                    />
                    <Text
                      className="text-base text-center text-gray-600"
                      size="txtOutfitRegular16Gray600"
                    >
                      Newyork Hospital, USA
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="bg-gray-50 flex flex-col items-center justify-start pt-7 sm:px-5 px-7 rounded-tl-[134px] rounded-tr-[134px] w-full">
                  <Img
                    className="h-[241px] md:h-auto object-cover w-[96%]"
                    src="images/img_drapurvavasavada.png"
                    alt="drapurvavasavad"
                  />
                </div>
                <div className="bg-white-A700 flex flex-col items-start justify-start p-[15px] shadow-bs w-full">
                  <Text
                    className="mt-0.5 text-center text-gray-900 text-xl"
                    size="txtOutfitSemiBold20Gray900"
                  >
                    Dr. Apurva Vasavada
                  </Text>
                  <div className="flex flex-row items-end justify-between mt-[13px] w-full">
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[104px] rounded-md text-center text-sm"
                      color="blue_gray_50"
                      size="xs"
                      variant="fill"
                    >
                      Cardiologist
                    </Button>
                    <div className="flex flex-row items-start justify-evenly my-1">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_star.svg"
                        alt="star"
                      />
                      <Text
                        className="text-base text-black-900 text-center"
                        size="txtOutfitMedium16Black900"
                      >
                        <span className="text-black-900 font-outfit font-semibold">
                          4.8
                        </span>
                        <span className="text-gray-600 font-outfit font-normal">
                          (250)
                        </span>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start mb-0.5 mt-4 w-[79%] md:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_location_gray_600.svg"
                      alt="location"
                    />
                    <Text
                      className="text-base text-center text-gray-600"
                      size="txtOutfitRegular16Gray600"
                    >
                      Newyork Hospital, USA
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <Img
              className="h-[38px] mt-[42px]"
              src="images/img_clock_teal_500.svg"
              alt="clock_Two"
            />
          </div>
          <div className="bg-gray-100 flex flex-col items-center justify-start p-20 md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start w-[95%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <div className="flex md:flex-1 flex-col gap-[30px] items-start justify-start w-[39%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-center text-teal-600 text-xl"
                      size="txtOutfitSemiBold20"
                    >
                      Testimonials
                    </Text>
                    <Text
                      className="leading-[52.00px] mt-[5px] sm:text-[32px] md:text-[38px] text-[42px] text-gray-900 w-[90%] sm:w-full"
                      size="txtOutfitMedium42"
                    >
                      What our great Customers say about our Doctor
                    </Text>
                    <Img
                      className="h-[22px] mt-6"
                      src="images/img_reply.svg"
                      alt="reply"
                    />
                    <Text
                      className="leading-[150.00%] mt-[26px] text-gray-600 text-lg w-full"
                      size="txtOutfitRegular18"
                    >
                      Now you can make an appointment with your doctor anywhere
                      and anytime via online booking easier.
                    </Text>
                    <Img
                      className="h-[30px] mt-6"
                      src="images/img_group1000003409.svg"
                      alt="group1000003499"
                    />
                    <div className="flex flex-col items-start justify-start mt-[25px]">
                      <Text
                        className="text-center text-gray-900 text-xl"
                        size="txtOutfitSemiBold20Gray900"
                      >
                        Dr. Bailey Bins
                      </Text>
                      <Text
                        className="mt-0.5 text-base text-center text-gray-600"
                        size="txtOutfitRegular16Gray600"
                      >
                        Newyork Hospital, USA
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-[38px]"
                    src="images/img_clock_teal_500.svg"
                    alt="clock_Three"
                  />
                </div>
                <div className="flex md:flex-1 flex-col md:gap-10 gap-[294px] justify-start w-[9%] md:w-full">
                  <Img
                    className="h-14 ml-7 md:ml-[0]"
                    src="images/img_vector.svg"
                    alt="vector"
                  />
                  <Img
                    className="h-[86px] mr-6"
                    src="images/img_user_deep_orange_a100.svg"
                    alt="user_One"
                  />
                </div>
                <div className="h-[614px] md:ml-[0] ml-[22px] relative w-[614px] md:w-full">
                  <div className="h-[463px] md:h-[469px] ml-[5px] mt-[47px] w-[69%] sm:w-full">
                    <div className="absolute bg-gradient4  bottom-[0] flex flex-col h-[422px] sm:h-auto inset-x-[0] items-center justify-start mx-auto px-[17px] rounded-[50%] w-[422px]">
                      <Img
                        className="h-[422px] md:h-auto object-cover w-[96%]"
                        src="images/img_confidentmiddl.png"
                        alt="confidentmiddl"
                      />
                    </div>
                    <Img
                      className="absolute h-[300px] inset-x-[0] mx-auto object-cover top-[0] w-[88%]"
                      src="images/img_confidentmiddl_300x369.png"
                      alt="confidentmiddl_One"
                    />
                  </div>
                  <div className="absolute h-[614px] inset-[0] justify-center m-auto w-[614px] md:w-full">
                    <div className="border border-dashed border-deep_orange-A100 h-[614px] m-auto rotate-[-77deg] rounded-[50%] w-[614px]"></div>
                    <div className="absolute flex flex-row gap-[31px] h-max inset-y-[0] items-center justify-center my-auto right-[5%] w-[29%]">
                      <div className="flex flex-col md:gap-10 gap-[357px] items-center justify-start w-[41%]">
                        <Img
                          className="h-[69px] md:h-auto rounded-[50%] w-[70px]"
                          src="images/img_ellipse214.png"
                          alt="ellipse214"
                        />
                        <Img
                          className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                          src="images/img_ellipse217.png"
                          alt="ellipse217"
                        />
                      </div>
                      <div className="flex flex-col md:gap-10 gap-[89px] items-center justify-start w-[42%]">
                        <Img
                          className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                          src="images/img_ellipse215.png"
                          alt="ellipse215"
                        />
                        <Img
                          className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                          src="images/img_ellipse216.png"
                          alt="ellipse216"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end mt-[122px] px-32 md:px-5 w-full">
          <div className="flex flex-col items-center justify-start mr-[67px] w-[95%] md:w-full">
            <div className="flex md:flex-col flex-row gap-[33px] items-end justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[55px] items-end justify-start w-[63%] md:w-full">
                <div className="flex flex-col gap-[9px] items-center justify-start">
                  <Text
                    className="text-center text-teal-600 text-xl"
                    size="txtOutfitSemiBold20"
                  >
                    Our Blogs
                  </Text>
                  <Text
                    className="sm:text-[32px] md:text-[38px] text-[42px] text-center text-gray-900"
                    size="txtOutfitSemiBold42"
                  >
                    See Our Latest Blog
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-[33px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col relative w-full">
                    <Img
                      className="h-[329px] mx-auto object-cover w-full"
                      src="images/img_rectangle4327.png"
                      alt="rectangle4327"
                    />
                    <div className="bg-white-A700 flex flex-col items-start justify-start mt-[-46px] mx-auto p-[15px] shadow-bs w-[88%] z-[1]">
                      <div className="flex flex-row gap-5 items-start justify-start w-[77%] md:w-full">
                        <div className="flex flex-row gap-1.5 items-start justify-start w-[42%]">
                          <Img
                            className="h-5 w-5"
                            src="images/img_play_teal_500.svg"
                            alt="play"
                          />
                          <Text
                            className="text-base text-center text-gray-600"
                            size="txtOutfitRegular16Gray600"
                          >
                            By Admin
                          </Text>
                        </div>
                        <div className="flex flex-row gap-1.5 items-start justify-start w-1/2">
                          <Img
                            className="h-5 w-5"
                            src="images/img_calendar_teal_500.svg"
                            alt="calendar"
                          />
                          <Text
                            className="text-base text-center text-gray-600"
                            size="txtOutfitRegular16Gray600"
                          >
                            10 Jan 2023
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[25.00px] mt-[13px] text-gray-900 text-lg w-[95%] sm:w-full"
                        size="txtOutfitMedium18"
                      >
                        Doctor Getting Patient Ready For As Discussing Working
                      </Text>
                      <div className="flex flex-row gap-1.5 items-center justify-start mb-0.5 mt-[18px] w-[34%] md:w-full">
                        <Text
                          className="text-base text-teal-500"
                          size="txtOutfitMedium16"
                        >
                          Read More
                        </Text>
                        <Img
                          className="h-4 w-4"
                          src="images/img_arrowright.svg"
                          alt="arrowright"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col relative w-full">
                    <Img
                      className="h-[329px] mx-auto object-cover w-full"
                      src="images/img_rectangle4327_329x373.png"
                      alt="rectangle4327"
                    />
                    <div className="bg-white-A700 flex flex-col items-start justify-start mt-[-46px] mx-auto p-[15px] shadow-bs w-[88%] z-[1]">
                      <div className="flex flex-row gap-5 items-start justify-start w-[77%] md:w-full">
                        <div className="flex flex-row gap-1.5 items-start justify-start w-[42%]">
                          <Img
                            className="h-5 w-5"
                            src="images/img_play_teal_500.svg"
                            alt="play"
                          />
                          <Text
                            className="text-base text-center text-gray-600"
                            size="txtOutfitRegular16Gray600"
                          >
                            By Admin
                          </Text>
                        </div>
                        <div className="flex flex-row gap-1.5 items-start justify-start w-1/2">
                          <Img
                            className="h-5 w-5"
                            src="images/img_calendar_teal_500.svg"
                            alt="calendar"
                          />
                          <Text
                            className="text-base text-center text-gray-600"
                            size="txtOutfitRegular16Gray600"
                          >
                            10 Jan 2023
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[25.00px] mt-[13px] text-gray-900 text-lg w-[95%] sm:w-full"
                        size="txtOutfitMedium18"
                      >
                        Doctor Getting Patient Ready For As Discussing Working
                      </Text>
                      <div className="flex flex-row gap-1.5 items-center justify-start mb-0.5 mt-[18px] w-[34%] md:w-full">
                        <Text
                          className="text-base text-teal-500"
                          size="txtOutfitMedium16"
                        >
                          Read More
                        </Text>
                        <Img
                          className="h-4 w-4"
                          src="images/img_arrowright.svg"
                          alt="arrowright"
                        />
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="md:h-[329px] h-[501px] md:mt-0 mt-[85px] relative w-[35%] md:w-full">
                <Img
                  className="absolute h-[119px] right-[0] top-[0]"
                  src="images/img_frame_light_blue_a400.svg"
                  alt="frame_Eight"
                />
                <div className="absolute bottom-[0] flex flex-col left-[0] w-[86%] sm:w-full">
                  <Img
                    className="h-[329px] mx-auto object-cover w-full"
                    src="images/img_rectangle4327_1.png"
                    alt="rectangle4327"
                  />
                  <div className="bg-white-A700 flex flex-col items-start justify-start mt-[-46px] mx-auto p-[15px] shadow-bs w-[88%] z-[1]">
                    <div className="flex flex-row gap-5 items-start justify-start w-[77%] md:w-full">
                      <div className="flex flex-row gap-1.5 items-start justify-start w-[42%]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_play_teal_500.svg"
                          alt="play_One"
                        />
                        <Text
                          className="text-base text-center text-gray-600"
                          size="txtOutfitRegular16Gray600"
                        >
                          By Admin
                        </Text>
                      </div>
                      <div className="flex flex-row gap-1.5 items-start justify-start w-1/2">
                        <Img
                          className="h-5 w-5"
                          src="images/img_calendar_teal_500.svg"
                          alt="calendar_One"
                        />
                        <Text
                          className="text-base text-center text-gray-600"
                          size="txtOutfitRegular16Gray600"
                        >
                          10 Jan 2023
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="leading-[25.00px] mt-[13px] text-gray-900 text-lg w-[95%] sm:w-full"
                      size="txtOutfitMedium18"
                    >
                      Doctor Getting Patient Ready For As Discussing Working
                    </Text>
                    <div className="flex flex-row gap-1.5 items-center justify-start mb-0.5 mt-[18px] w-[34%] md:w-full">
                      <a href="javascript:" className="text-base text-teal-500">
                        <Text size="txtOutfitMedium16">Read More</Text>
                      </a>
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowright.svg"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[120px] items-center mt-[120px] pr-[132px] md:px-5 w-full">
          <div className="bg-gradient5  flex flex-col items-center justify-start p-[46px] md:px-10 sm:px-5 w-[83%] md:w-full">
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[83px] grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] md:grid-cols-[repeat(1,_1fr_1px)_1fr] grid-cols-[repeat(3,_1fr_1px)_1fr] justify-center w-[97%]"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-6 items-center justify-start sm:ml-[0] w-full">
                <Img
                  className="h-[58px] w-[58px]"
                  src="images/img_cut.svg"
                  alt="cut"
                />
                <Text
                  className="leading-[32.00px] text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl w-full"
                  size="txtOutfitSemiBold24Gray90001"
                >
                  Certificate & Awards
                </Text>
                <div className="flex flex-col items-center justify-start w-[82%] md:w-full">
                  <Button
                    className="cursor-pointer font-medium min-w-[112px] text-base text-center"
                    shape="square"
                    color="teal_50"
                    size="xs"
                    variant="fill"
                  >
                    4831+
                  </Button>
                </div>
              </div>
              <Line className="self-center h-[178px] bg-black-900_14 w-px" />
              <div className="flex flex-col gap-6 items-center justify-start sm:ml-[0] w-full">
                <Img
                  className="h-[58px] w-[58px]"
                  src="images/img_globe.svg"
                  alt="globe"
                />
                <Text
                  className="leading-[32.00px] text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl w-full"
                  size="txtOutfitSemiBold24Gray90001"
                >
                  Psychology Family
                </Text>
                <div className="flex flex-col items-center justify-start w-[82%] md:w-full">
                  <Button
                    className="cursor-pointer font-medium min-w-[112px] text-base text-center"
                    shape="square"
                    color="gray_100_01"
                    size="xs"
                    variant="fill"
                  >
                    4831+
                  </Button>
                </div>
              </div>
              <Line className="self-center h-[178px] bg-black-900_14 w-px" />
              <div className="flex flex-col gap-6 items-center justify-start sm:ml-[0] w-full">
                <Img
                  className="h-[58px] w-[58px]"
                  src="images/img_cut.svg"
                  alt="cut"
                />
                <Text
                  className="leading-[32.00px] text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl w-full"
                  size="txtOutfitSemiBold24Gray90001"
                >
                  IndividualesCounSell
                </Text>
                <div className="flex flex-col items-center justify-start w-[82%] md:w-full">
                  <Button
                    className="cursor-pointer font-medium min-w-[112px] text-base text-center"
                    shape="square"
                    color="teal_50"
                    size="xs"
                    variant="fill"
                  >
                    4831+
                  </Button>
                </div>
              </div>
              <Line className="self-center h-[178px] bg-black-900_14 w-px" />
              <div className="flex flex-col gap-6 items-center justify-start sm:ml-[0] w-full">
                <Img
                  className="h-[58px] w-[58px]"
                  src="images/img_globe.svg"
                  alt="globe"
                />
                <Text
                  className="leading-[32.00px] text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl w-full"
                  size="txtOutfitSemiBold24Gray90001"
                >
                  Case Issues Solves
                </Text>
                <div className="flex flex-col items-center justify-start w-[82%] md:w-full">
                  <Button
                    className="cursor-pointer font-medium min-w-[112px] text-base text-center"
                    shape="square"
                    color="gray_100_01"
                    size="xs"
                    variant="fill"
                  >
                    4831+
                  </Button>
                </div>
              </div>
            </List>
          </div>
          <footer className="bg-gray-900 flex items-center justify-center w-full">
            <div className="md:h-[1269px] h-[611px] sm:h-[614px] mt-[3px] relative w-full">
              <div className="absolute md:h-[1266px] h-[611px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="h-[611px] m-auto object-cover w-full"
                  src="images/img_1.png"
                  alt="One"
                />
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[10%] w-[83%]">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex flex-col gap-[9px] items-start justify-start">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                        size="txtOutfitSemiBold32WhiteA700"
                      >
                        Subscribe Our Newsletter
                      </Text>
                      <Text
                        className="leading-[150.00%] text-base text-white-A700_cc w-full"
                        size="txtOutfitRegular16WhiteA700cc"
                      >
                        Enter your details to get business inspiration, Branding
                        solutions, and consulting tips delivered to your inbox
                      </Text>
                    </div>
                    <div className="bg-blue_gray-100 flex md:flex-1 flex-row items-center justify-between md:mt-0 my-[19px] pl-5 w-[39%] md:w-full">
                      <Text
                        className="text-base text-center text-gray-600"
                        size="txtOutfitRegular16Gray600"
                      >
                        Enter your email
                      </Text>
                      <Button
                        className="cursor-pointer font-medium min-w-[156px] text-center text-lg"
                        shape="square"
                        color="teal_500"
                        size="lg"
                        variant="fill"
                      >
                        Subscribe
                      </Button>
                    </div>
                  </div>
                  <Line className="bg-white-A700_0f h-px mt-[42px] w-full" />
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[34px] w-full">
                    <div className="flex md:flex-1 flex-col gap-8 items-start justify-start md:mt-0 mt-[5px] w-[26%] md:w-full">
                      <Img
                        className="h-10 md:h-auto object-cover w-[46%] sm:w-full"
                        src="images/img_image119.png"
                        alt="image119_One"
                      />
                      <Text
                        className="leading-[22.00px] text-base text-white-A700_cc"
                        size="txtOutfitLight16"
                      >
                        <>
                          The proper Footer on proper time can
                          <br />
                          preserve you protection. We assist you <br />
                          make sureeverybody forward.
                        </>
                      </Text>
                      <div className="flex flex-row gap-5 items-start justify-start w-auto">
                        <Button
                          className="flex h-[35px] items-center justify-center rounded-[17px] w-[35px]"
                          color="white_A700"
                          size="sm"
                          variant="fill"
                        >
                          <Img
                            className="h-[15px]"
                            src="images/img_facebook.png"
                            alt="facebook"
                          />
                        </Button>
                        <Button
                          className="flex h-[35px] items-center justify-center rounded-[17px] w-[35px]"
                          color="white_A700"
                          size="sm"
                          variant="fill"
                        >
                          <Img
                            className="h-[15px]"
                            src="images/img_twitter.png"
                            alt="twitter"
                          />
                        </Button>
                        <Button
                          className="flex h-[35px] items-center justify-center rounded-[17px] w-[35px]"
                          color="white_A700"
                          size="sm"
                          variant="fill"
                        >
                          <Img
                            className="h-[15px]"
                            src="images/img_twitter_35x35.png"
                            alt="twitter_One"
                          />
                        </Button>
                        <div className="bg-white-A700 flex flex-col h-[35px] items-center justify-start p-2.5 rounded-[17px] w-[35px]">
                          <div className="flex flex-col h-[15px] items-center justify-start w-[15px]">
                            <Img
                              className="h-[15px] md:h-auto object-cover w-[15px]"
                              src="images/img_maskgroup.png"
                              alt="maskgroup"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-5 items-start justify-start w-auto">
                      <div className="flex flex-col gap-4 items-start justify-start w-auto">
                        <Text
                          className="capitalize text-lg text-white-A700 w-auto"
                          size="txtOutfitSemiBold18"
                        >
                          Quick link
                        </Text>
                        <div className="flex flex-row items-center justify-start w-[45%] md:w-full">
                          <Img
                            className="h-[7px] md:h-auto object-cover w-[53%]"
                            src="images/img_maskgroup_7x20.png"
                            alt="maskgroup_One"
                          />
                          <Img
                            className="h-[7px] md:h-auto object-cover w-[53%]"
                            src="images/img_maskgroup_7x20.png"
                            alt="maskgroup_Two"
                          />
                        </div>
                      </div>
                      <ul className="flex flex-col gap-5 items-start justify-start w-auto md:w-full common-column-list">
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row gap-1.5 items-end justify-start">
                              <Img
                                className="h-[13px] md:h-auto object-cover w-[13px]"
                                src="images/img_maskgroup_13x13.png"
                                alt="maskgroup_Three"
                              />
                              <Text
                                className="capitalize text-base text-white-A700_cc w-auto"
                                size="txtOutfitRegular16WhiteA700cc"
                              >
                                Home
                              </Text>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row gap-1.5 items-end justify-start">
                              <Img
                                className="h-[13px] md:h-auto object-cover w-[13px]"
                                src="images/img_maskgroup_13x13.png"
                                alt="maskgroup_Four"
                              />
                              <Text
                                className="capitalize text-base text-white-A700_cc w-auto"
                                size="txtOutfitRegular16WhiteA700cc"
                              >
                                About us
                              </Text>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row gap-1.5 items-end justify-start">
                              <Img
                                className="h-[13px] md:h-auto object-cover w-[13px]"
                                src="images/img_maskgroup_13x13.png"
                                alt="maskgroup_Five"
                              />
                              <Text
                                className="capitalize text-base text-white-A700_cc w-auto"
                                size="txtOutfitRegular16WhiteA700cc"
                              >
                                Services
                              </Text>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row gap-1.5 items-end justify-start">
                              <Img
                                className="h-[13px] md:h-auto object-cover w-[13px]"
                                src="images/img_maskgroup_13x13.png"
                                alt="maskgroup_Six"
                              />
                              <Text
                                className="capitalize text-base text-white-A700_cc w-auto"
                                size="txtOutfitRegular16WhiteA700cc"
                              >
                                Blog
                              </Text>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start w-[18%] md:w-full">
                      <div className="flex flex-col gap-5 items-start justify-start w-auto">
                        <div className="flex flex-col gap-4 items-start justify-start w-auto">
                          <Text
                            className="capitalize text-lg text-white-A700 w-auto"
                            size="txtOutfitSemiBold18"
                          >
                            Departments
                          </Text>
                          <div className="flex flex-row items-center justify-start w-[35%] md:w-full">
                            <Img
                              className="h-[7px] md:h-auto object-cover w-[53%]"
                              src="images/img_maskgroup_7x20.png"
                              alt="maskgroup_Seven"
                            />
                            <Img
                              className="h-[7px] md:h-auto object-cover w-[53%]"
                              src="images/img_maskgroup_7x20.png"
                              alt="maskgroup_Eight"
                            />
                          </div>
                        </div>
                        <ul className="flex flex-col gap-5 items-start justify-start w-auto md:w-full common-column-list">
                          <li>
                            <a href="javascript:">
                              <div className="flex flex-row gap-1.5 items-end justify-start">
                                <Img
                                  className="h-[13px] md:h-auto object-cover w-[13px]"
                                  src="images/img_maskgroup_13x13.png"
                                  alt="maskgroup_Nine"
                                />
                                <Text
                                  className="capitalize text-base text-white-A700_cc w-auto"
                                  size="txtOutfitRegular16WhiteA700cc"
                                >
                                  Cardiology
                                </Text>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:">
                              <div className="flex flex-row gap-1.5 items-end justify-start">
                                <Img
                                  className="h-[13px] md:h-auto object-cover w-[13px]"
                                  src="images/img_maskgroup_13x13.png"
                                  alt="maskgroup_Ten"
                                />
                                <Text
                                  className="capitalize text-base text-white-A700_cc w-auto"
                                  size="txtOutfitRegular16WhiteA700cc"
                                >
                                  Cardiac Surgery
                                </Text>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:">
                              <div className="flex flex-row gap-1.5 items-end justify-start">
                                <Img
                                  className="h-[13px] md:h-auto object-cover w-[13px]"
                                  src="images/img_maskgroup_13x13.png"
                                  alt="maskgroup_Eleven"
                                />
                                <Text
                                  className="capitalize text-base text-white-A700_cc w-auto"
                                  size="txtOutfitRegular16WhiteA700cc"
                                >
                                  Critical Care Management
                                </Text>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:">
                              <div className="flex flex-row gap-1.5 items-end justify-start">
                                <Img
                                  className="h-[13px] md:h-auto object-cover w-[13px]"
                                  src="images/img_maskgroup_13x13.png"
                                  alt="maskgroup_Twelve"
                                />
                                <Text
                                  className="capitalize text-base text-white-A700_cc w-auto"
                                  size="txtOutfitRegular16WhiteA700cc"
                                >
                                  General Surgery
                                </Text>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-row gap-1.5 items-end justify-start w-auto">
                        <Img
                          className="h-[13px] md:h-auto object-cover w-[13px]"
                          src="images/img_maskgroup_13x13.png"
                          alt="maskgroup_Thirteen"
                        />
                        <Text
                          className="capitalize text-base text-white-A700_cc w-auto"
                          size="txtOutfitRegular16WhiteA700cc"
                        >
                          Orthopaedic Surgery
                        </Text>
                      </div>
                      <div className="flex flex-row gap-1.5 items-end justify-start w-auto">
                        <Img
                          className="h-[13px] md:h-auto object-cover w-[13px]"
                          src="images/img_maskgroup_13x13.png"
                          alt="maskgroup_Fourteen"
                        />
                        <Text
                          className="capitalize text-base text-white-A700_cc w-auto"
                          size="txtOutfitRegular16WhiteA700cc"
                        >
                          Oncology
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[13px] items-start justify-start w-auto">
                      <div className="flex flex-col gap-4 items-start justify-start w-auto">
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtOutfitSemiBold18"
                        >
                          Contact
                        </Text>
                        <div className="flex relative w-1/2">
                          <Img
                            className="h-[7px] my-auto object-cover w-[61%]"
                            src="images/img_maskgroup_7x20.png"
                            alt="maskgroup_Fifteen"
                          />
                          <Img
                            className="h-[7px] ml-[-7px] my-auto object-cover w-[61%] z-[1]"
                            src="images/img_maskgroup_7x20.png"
                            alt="maskgroup_Sixteen"
                          />
                        </div>
                      </div>
                      <ul className="flex flex-col gap-5 items-start justify-start w-auto md:w-full common-column-list">
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row gap-3.5 items-center justify-start">
                              <Img
                                className="h-[25px] md:h-auto object-cover w-[25px]"
                                src="images/img_maskgroup_25x25.png"
                                alt="maskgroup_Seventeen"
                              />
                              <Text
                                className="capitalize text-base text-white-A700_cc w-auto"
                                size="txtOutfitRegular16WhiteA700cc"
                              >
                                44 Danwers, NY City, USA, 70-102
                              </Text>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row gap-3.5 items-center justify-start">
                              <Img
                                className="h-[25px] md:h-auto object-cover w-[25px]"
                                src="images/img_maskgroup_1.png"
                                alt="maskgroup_Eighteen"
                              />
                              <Text
                                className="capitalize text-base text-white-A700_cc w-auto"
                                size="txtOutfitRegular16WhiteA700cc"
                              >
                                lamaro@lamaroyc.us
                              </Text>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row gap-3.5 items-center justify-start">
                              <Img
                                className="h-[25px] md:h-auto object-cover w-[25px]"
                                src="images/img_maskgroup_1.png"
                                alt="maskgroup_Nineteen"
                              />
                              <Text
                                className="capitalize text-base text-white-A700_cc w-auto"
                                size="txtOutfitRegular16WhiteA700cc"
                              >
                                91+585-656-658
                              </Text>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[82px] inset-x-[0] items-center justify-end mx-auto p-6 sm:px-5 w-full"
                style={{
                  backgroundImage: "url('images/img_group1000003534.png')",
                }}
              >
                <Text
                  className="mt-3 text-base text-center text-white-A700"
                  size="txtOutfitSemiBold16"
                >
                  © 2023 All rights reserved
                </Text>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
