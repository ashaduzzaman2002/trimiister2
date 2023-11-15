import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";

const AboutUsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-outfit items-center justify-start mx-auto w-full">
        <div className="bg-gradient  flex flex-col items-center justify-start w-full">
          <div className="h-[555px] md:h-[614px] md:px-5 relative w-full">
            <div className="h-[555px] md:h-[614px] m-auto w-full">
              <div className="h-[555px] md:h-[614px] m-auto w-full">
                <Img
                  className="h-[555px] m-auto object-cover w-full"
                  src="images/img_1_555x1440.png"
                  alt="One"
                />
                <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[6%] w-[83%]">
                  <header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                    <Img
                      className="md:flex-1 h-10 sm:h-auto ml-6 md:ml-[0] md:mt-0 my-6 object-cover w-[12%] md:w-full"
                      src="images/img_image119.png"
                      alt="image119"
                    />
                    <div className="flex md:flex-1 flex-col items-center justify-start mb-[29px] md:ml-[0] ml-[72px] md:mt-0 mt-8 w-[55%] md:w-full">
                      <ul className="flex sm:flex-col flex-row gap-7 md:hidden items-start justify-between w-full common-row-list">
                        <li>
                          <a href="javascript:">
                            <div className="h-[26px] relative">
                              <Text
                                className="hover:absolute absolute hover:font-medium right-[0] text-base text-teal-500 top-[0]"
                                size="txtOutfitMedium16"
                              >
                                About Us
                              </Text>
                              <div className="absolute flex flex-col h-full inset-y-[0] justify-start left-[0] my-auto w-3/4">
                                <Text
                                  className="hover:font-medium mr-[59px] text-base text-gray-700 hover:text-teal-500"
                                  size="txtOutfitRegular16"
                                >
                                  Home
                                </Text>
                                <Line className="bg-teal-500 h-0.5 md:ml-[0] ml-[72px] mt-[3px] w-[30%]" />
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="hover:font-medium sm:mt-0 mt-[3px] text-base text-gray-700 hover:text-teal-500"
                          >
                            <Text size="txtOutfitRegular16">Departments</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="hover:font-medium sm:mt-0 mt-[3px] text-base text-gray-700 hover:text-teal-500"
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
                  <div className="flex flex-row gap-3 items-start justify-start mt-[51px] w-[18%] md:w-full">
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
                      About Us
                    </Text>
                  </div>
                  <Text
                    className="mt-[45px] sm:text-[32px] md:text-[38px] text-[42px] text-gray-900"
                    size="txtOutfitSemiBold42"
                  >
                    About Our Hospital
                  </Text>
                  <div className="flex md:flex-col flex-row gap-2.5 items-center justify-start mt-[7px] w-[51%] md:w-full">
                    <Line className="bg-teal-500 md:h-0.5 h-[49px] w-0.5 md:w-full" />
                    <Text
                      className="text-gray-600 text-xl w-[98%] sm:w-full"
                      size="txtOutfitRegular20Gray600"
                    >
                      Good health is a state of mental, physical and social well
                      being and it does not just mean the absence diseanse!
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[264px] mt-[31px] text-center text-xl"
                    shape="round"
                    color="teal_500"
                    size="md"
                    variant="fill"
                  >
                    Lean More About Us
                  </Button>
                </div>
              </div>
              <div className="absolute border-[19px] border-solid bottom-[2%] h-[389px] right-[9%] rotate-[90deg] rounded-[194px] teal_500_teal_500_00_border w-[388px]"></div>
            </div>
            <Img
              className="absolute bottom-[0] h-[371px] object-cover right-[10%] w-[24%]"
              src="images/img_imageprofessio_371x345.png"
              alt="imageprofessio"
            />
            <Img
              className="absolute bottom-[27%] h-[174px] right-[37%]"
              src="images/img_frame_deep_orange_a100.svg"
              alt="frame"
            />
          </div>
        </div>
        <div className="md:h-[1089px] h-[520px] sm:h-[580px] max-w-[1215px] mt-[90px] mx-auto md:px-5 relative w-full">
          <Img
            className="absolute h-[146px] left-[0] top-[0] w-[146px]"
            src="images/img_star1.svg"
            alt="starOne"
          />
          <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[98%]">
            <div className="flex md:flex-col flex-row md:gap-[45px] items-center justify-between w-full">
              <div className="h-[490px] relative w-[37%] md:w-full">
                <Img
                  className="h-[490px] m-auto object-cover w-full"
                  src="images/img_maskgroup_490x429.png"
                  alt="maskgroup"
                />
                <Button
                  className="absolute bottom-[0] cursor-pointer font-semibold inset-x-[0] min-w-[250px] mx-auto text-2xl md:text-[22px] text-center sm:text-xl"
                  shape="square"
                  color="white_A700_4c"
                  size="lg"
                  variant="fill"
                >
                  Dr. P.C. Mehra
                </Button>
              </div>
              <div className="flex md:flex-1 flex-col items-start justify-start w-3/5 md:w-full">
                <div className="flex flex-col gap-[7px] items-start justify-start">
                  <Text
                    className="text-center text-teal-600 text-xl"
                    size="txtOutfitSemiBold20"
                  >
                    <>Chairman&#39;s Message</>
                  </Text>
                  <Text
                    className="sm:text-[32px] md:text-[38px] text-[42px] text-gray-900"
                    size="txtOutfitMedium42"
                  >
                    Tristar. Bringing Excellence To Life.
                  </Text>
                </div>
                <Text
                  className="leading-[28.00px] mt-3.5 text-gray-600 text-xl w-full"
                  size="txtOutfitRegular20"
                >
                  Welcome to advanced concepts in health care. A vision to
                  deliver excellence in life sciences so that every Indian can
                  access, avail and enjoy good health. Tristar’s commitment to
                  Life begins in Surat – the first leg of a nation-wide network
                  of multi-specialty hospitals. A large landmark hospital
                  equipped with advanced diagnostic support technology and
                  integrated complex of modular operation theaters. Tristar is a
                  multi-specialty facility that effectively services a wide
                  range of medical needs comprehensively and promptly.
                </Text>
                <Text
                  className="leading-[28.00px] mt-[18px] text-gray-600 text-xl w-full"
                  size="txtOutfitRegular20"
                >
                  Put the patient at the center of everything. And let every
                  aspect of every endeavor be driven by best practices and
                  underlined by goals of excellence
                </Text>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[184px] mt-[38px] text-center text-xl"
                  shape="round"
                  color="teal_500"
                  size="md"
                  variant="fill"
                >
                  Learn More{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 md:h-[1161px] sm:h-[625px] h-[668px] mt-[120px] p-[41px] md:px-5 relative w-full">
          <Img
            className="absolute bottom-[6%] h-[61px] right-[24%]"
            src="images/img_vector_red_100.svg"
            alt="vector"
          />
          <Img
            className="h-[53px] ml-auto mr-[593px] mt-[66px] w-[53px]"
            src="images/img_user_deep_orange_a100.svg"
            alt="user"
          />
          <div className="absolute flex md:flex-col flex-row gap-4 h-max inset-[0] items-center justify-center m-auto w-[83%]">
            <div className="flex flex-col gap-8 items-start justify-start w-[59%] md:w-full">
              <div className="flex flex-col items-start justify-start w-[90%] md:w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-center text-teal-600 text-xl"
                    size="txtOutfitSemiBold20"
                  >
                    Hospital Overview
                  </Text>
                  <Text
                    className="leading-[56.00px] mt-[3px] sm:text-[32px] md:text-[38px] text-[42px] text-gray-900 w-full"
                    size="txtOutfitSemiBold42"
                  >
                    Specialty Care: Enhancing Quality Of Life.
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] mt-3.5 text-gray-600 text-lg w-full"
                  size="txtOutfitRegular18"
                >
                  Body with over 36 years experiences, the completion of more
                  than 3k+ projects and impressive growth over the last year.
                  Body has been the strength and depth ready.
                </Text>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[227px] mt-[51px] text-center text-xl"
                  shape="round"
                  color="teal_500"
                  size="md"
                  variant="fill"
                >
                  View Department
                </Button>
              </div>
              <List
                className="sm:flex-col flex-row gap-[27px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                  <div className="flex flex-row gap-4 items-start justify-start w-3/4 md:w-full">
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
                        alt="frame"
                      />
                    </Button>
                    <Text
                      className="mt-[3px] text-gray-900 text-xl"
                      size="txtOutfitRegular20Gray900"
                    >
                      Monthly Checkups
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-start justify-start w-[84%] md:w-full">
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
                        alt="frame_One"
                      />
                    </Button>
                    <Text
                      className="mt-[3px] text-gray-900 text-xl"
                      size="txtOutfitRegular20Gray900"
                    >
                      Caring Medical Team
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start w-full">
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
                      className="text-gray-900 text-xl"
                      size="txtOutfitRegular20Gray900"
                    >
                      Proactive and Fast Results
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                  <div className="flex flex-row gap-4 items-start justify-start w-[77%] md:w-full">
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
                        alt="frame"
                      />
                    </Button>
                    <Text
                      className="mt-[3px] text-gray-900 text-xl"
                      size="txtOutfitRegular20Gray900"
                    >
                      Counseling for Planned Diet.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-start justify-start w-[95%] md:w-full">
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
                        alt="frame_One"
                      />
                    </Button>
                    <Text
                      className="mt-[3px] text-gray-900 text-xl"
                      size="txtOutfitRegular20Gray900"
                    >
                      Facility of in-house diet for patients.
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
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
                      className="sm:mt-0 mt-[3px] text-gray-900 text-xl"
                      size="txtOutfitRegular20Gray900"
                    >
                      Comprehensive health Check up Plans.
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <div className="md:h-[363px] h-[393px] relative w-[41%] md:w-full">
              <Img
                className="absolute h-[363px] object-cover right-[0] top-[0] w-[91%]"
                src="images/img_rectangle4339.png"
                alt="rectangle4339"
              />
              <Img
                className="absolute bottom-[0] h-[363px] left-[0] object-cover w-[94%]"
                src="images/img_rectangle4340.png"
                alt="rectangle4340"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1184px] mt-[120px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
              <Img
                className="h-[527px] md:h-auto object-cover"
                src="images/img_rectangle4341.png"
                alt="rectangle4341"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-center text-teal-600 text-xl"
                    size="txtOutfitSemiBold20"
                  >
                    Highlights & Technology
                  </Text>
                  <Text
                    className="leading-[52.00px] mt-[3px] sm:text-[32px] md:text-[38px] text-[42px] text-gray-900 w-full"
                    size="txtOutfitMedium42"
                  >
                    Infrastructure: Best-In-Class Technology. Efficient Vigilant
                    Systems.
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] mt-6 text-gray-600 text-lg w-full"
                  size="txtOutfitRegular18"
                >
                  The most complex and challenging area of hospital construction
                  is the operating department. We have installed modular
                  Operation Theatres which lend us outstanding advantages in
                  efficiency control.{" "}
                </Text>
                <Text
                  className="leading-[150.00%] mt-3 text-gray-600 text-lg w-full"
                  size="txtOutfitRegular18"
                >
                  The state-of-the-art Cath Lab allows surgeons to see the
                  stents and adds greatly to the dexterity, accuracy and
                  compatibility for hybrid procedures.
                </Text>
                <div className="flex flex-row gap-2.5 items-center justify-start mt-6 w-[55%] md:w-full">
                  <Button
                    className="flex h-[50px] items-center justify-center rounded-[50%] w-[50px]"
                    shape="circle"
                    color="blue_gray_50"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_frame_teal_500_50x50.svg"
                      alt="frame_One"
                    />
                  </Button>
                  <Text
                    className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                    size="txtOutfitMedium24Gray900"
                  >
                    Newyork Hospital, USA
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-center text-teal-600 text-xl"
                    size="txtOutfitSemiBold20"
                  >
                    Experience
                  </Text>
                  <Text
                    className="leading-[52.00px] mt-[3px] sm:text-[32px] md:text-[38px] text-[42px] text-gray-900 w-full"
                    size="txtOutfitMedium42"
                  >
                    Therapeutic Experience: Comfortable, Hygienic,
                    Patient-Centric
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] mt-6 text-gray-600 text-lg w-[98%] sm:w-full"
                  size="txtOutfitRegular18"
                >
                  Our approach is to revive, revitalize and rejuvenate the
                  patient. Each patient is extended personalized and customized
                  care. Patients can choose from our large panel of specialist
                  doctors and proactively participate in their path of care and
                  recovery.
                </Text>
                <Text
                  className="leading-[150.00%] mt-3 text-gray-600 text-lg w-[98%] sm:w-full"
                  size="txtOutfitRegular18"
                >
                  A choice of deluxe, twin sharing rooms and VIP suites are
                  designed to provide great comfort to the patients and their
                  relatives.
                </Text>
                <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start mt-6 w-[68%] md:w-full">
                  <Button
                    className="flex h-[50px] items-center justify-center rounded-[50%] w-[50px]"
                    shape="circle"
                    color="red_50_01"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_frame_deep_orange_a100_50x50.svg"
                      alt="frame_Two"
                    />
                  </Button>
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                    size="txtOutfitMedium24Gray900"
                  >
                    <span className="text-gray-900 font-outfit text-left font-medium">
                      Contact Us:{" "}
                    </span>
                    <span className="text-gray-900 font-outfit text-left font-medium">
                      +(1)245-45678
                    </span>
                    <span className="text-gray-900 font-outfit text-left font-medium">
                      {" "}
                      call
                    </span>
                  </Text>
                </div>
              </div>
              <Img
                className="h-[527px] md:h-auto object-cover"
                src="images/img_rectangle4343.png"
                alt="rectangle4343"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-100 flex flex-col items-center justify-start mt-[120px] p-20 md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1216px] mx-auto w-full">
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
                  alt="clock"
                />
              </div>
              <div className="flex md:flex-1 flex-col md:gap-10 gap-[294px] justify-start w-[9%] md:w-full">
                <Img
                  className="h-14 ml-7 md:ml-[0]"
                  src="images/img_vector.svg"
                  alt="vector_One"
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
        <Footer className="bg-gray-900 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default AboutUsPage;
