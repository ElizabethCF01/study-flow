// import { Badge } from "../../../components/ui/badge";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";

import ChevronRight from "../../../assets/chevron-right.svg";
import PresetFocusIcon from "../../../assets/preset-focus.png";
import AdaptiveSessionsIcon from "../../../assets/adaptive-sessions.png";
import SmartSoundscapesIcon from "../../../assets/smart-soundscapes.png";
import EffortBasedProgressIcon from "../../../assets/effort-based-progress.png";
import MinimalistDesignIcon from "../../../assets/minimalist-design.png";
import GooglePlayIcon from "../../../assets/google-play.png";
import AppStoreIcon from "../../../assets/app-store.png";
import UserAvatar1 from "../../../assets/testimonials.png";
import IphoneMockup from "../../../assets/iphone-mockup.png";

const features = [
  {
    icon: PresetFocusIcon,
    title: "Preset Focus Modes",
    description:
      "Choose between Deep Focus, Exam Cram, or Creative Flow — each with its own soundscape, timer rhythm, and break pacing.",
  },
  {
    icon: AdaptiveSessionsIcon,
    title: "Adaptive Sessions",
    description:
      "StudyFlow learns your patterns over time and gently adapts session lengths, music, and breaks to match your natural flow.",
  },
  {
    icon: SmartSoundscapesIcon,
    title: "Smart Soundscapes",
    description:
      "Music that shifts naturally during focus sessions and break times — no playlists to manage, no distractions.",
  },
  {
    icon: EffortBasedProgressIcon,
    title: "Effort-Based Progress Tracking",
    description:
      "Track your study consistency without guilt. We celebrate effort and habit-building, not just minutes on the clock.",
  },
  {
    icon: MinimalistDesignIcon,
    title: "Minimalist, Unified Design",
    description:
      "No clutter, no app-switching — everything you need to focus in one clean interface.",
  },
];

// const serviceCards = [
//   {
//     title: "Ready to go services",
//     description: "Streamlining solutions for swift success",
//     tags: [
//       {
//         icon: "https://c.animaapp.com/mfjk9ur3zlxBhT/img/vector-5.svg",
//         text: "Powerful APIs",
//       },
//       {
//         icon: "https://c.animaapp.com/mfjk9ur3zlxBhT/img/vector-3.svg",
//         text: "For Design",
//       },
//       {
//         icon: "https://c.animaapp.com/mfjk9ur3zlxBhT/img/card-1.svg",
//         text: "Cybersecurity",
//       },
//       {
//         icon: "https://c.animaapp.com/mfjk9ur3zlxBhT/img/card.svg",
//         text: "Decentralized",
//       },
//       {
//         icon: "https://c.animaapp.com/mfjk9ur3zlxBhT/img/vector-1.svg",
//         text: "For Teams",
//       },
//       {
//         icon: "https://c.animaapp.com/mfjk9ur3zlxBhT/img/vector-2.svg",
//         text: "Decentralized",
//       },
//       {
//         icon: "https://c.animaapp.com/mfjk9ur3zlxBhT/img/card-1.svg",
//         text: "Cybersecurity",
//       },
//       {
//         icon: "https://c.animaapp.com/mfjk9ur3zlxBhT/img/vector-4.svg",
//         text: "Powerful APIs",
//       },
//       {
//         icon: "https://c.animaapp.com/mfjk9ur3zlxBhT/img/container.svg",
//         text: "Colaborative teams",
//       },
//       {
//         icon: "https://c.animaapp.com/mfjk9ur3zlxBhT/img/card-1.svg",
//         text: "Safe Space",
//       },
//       {
//         icon: "https://c.animaapp.com/mfjk9ur3zlxBhT/img/vector-8.svg",
//         text: "Revolution",
//       },
//       {
//         icon: "https://c.animaapp.com/mfjk9ur3zlxBhT/img/vector.svg",
//         text: "Scalable",
//       },
//     ],
//     type: "tags",
//   },
//   {
//     title: "For growing teams",
//     description: "Tailored support to give you progress",
//     type: "team",
//   },
//   {
//     title: "Powerful APIs for developers",
//     description: "Seamless Integration for your company",
//     type: "code",
//   },
//   {
//     title: "The best blockchains out there",
//     description: "Pioneering paths in decentralized solutions",
//     type: "blockchain",
//   },
//   {
//     title: "Web 3.0 development",
//     description: "Crafting tomorrow's digital landscape today",
//     type: "web3",
//   },
// ];

const testimonials = [
  {
    title: "Help us focus better",
    content:
      "Loreum Ipsum barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a chamber built from sarsen.",
    author: "Kristin Watson",
    location: "StudyFlow User, Caifornia",
    avatar: UserAvatar1,
  },
  {
    title: "Help me concentrate",
    content:
      "Loreum Ipsum barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a chamber built from sarsen.",
    author: "Kristin Watson",
    location: "StudyFlow User, Caifornia",
    avatar: UserAvatar1,
  },
];

// const web3Tags = [
//   ["Web 3.0 development", "Growth"],
//   ["APIs", "Go-to-Market Solutions"],
//   ["Easy-to-use interface", "Scalable"],
//   ["Fast Integrations", "Accessibility"],
// ];

export const FeaturesSection = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center gap-[124px] w-full relative pt-32">
      <div className="flex flex-col items-center gap-[52px] w-full max-w-[1110px] translate-y-[-1rem] animate-fade-in opacity-0">
        <div className="flex flex-col w-full max-w-[948px] items-center gap-[23px]">
          <h1 className="text-center font-black text-white text-[85.3px] tracking-[0] leading-[85.3px]">
            All your focus tools finally together
          </h1>

          <p className="text-center font-normal text-[#d3d3d6] text-[21px] tracking-[0] leading-[29.4px]">
            Where focus finds its flow
          </p>
        </div>

        <div className="relative">
          <div className="w-[146px] h-[37px] rounded-[60px] blur-[11.5px] bg-[linear-gradient(52deg,rgba(129,164,229,1)_0%,rgba(137,201,233,1)_54%,rgba(147,115,236,1)_100%)] opacity-50 absolute top-[15px] left-1/2 transform -translate-x-1/2" />

          <Button className="h-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[78px] bg-[linear-gradient(46deg,rgba(112,207,228,1)_0%,rgba(152,129,229,1)_100%)] text-[#1e2f14] text-sm font-normal hover:opacity-90 transition-opacity absolute left-1/2 transform -translate-x-1/2">
            See How It Works
            <img className="w-[5.25px] h-[9.63px]" alt="" src={ChevronRight} />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-[101px] w-full max-w-[1110px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col min-w-[252px] items-start gap-2"
          >
            <div className="flex items-center gap-2 w-full">
              <img
                className="w-[30px] h-[30px]"
                alt="Feature icon"
                src={feature.icon}
              />
              <h3 className="font-bold text-white text-lg">
                {feature.title}
              </h3>
            </div>
            <p className="font-normal text-[#d3d3d6] text-sm leading-[21px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* <div className="flex flex-col items-center justify-center gap-[53px] bg-[#241b1b80] p-8 rounded-lg translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <div className="flex flex-col items-center gap-[37px]">
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[40px] text-center leading-[48px]">
            <span className="text-white">Explore Our Feature </span>
            <span className="text-[#884b43]">
              (This sec is placeholder for later)
            </span>
          </h2>

          <div className="[font-family:'Poppins',Helvetica] font-normal text-[#a4a7ae] text-lg text-center leading-[25.2px] max-w-[800px]">
            Under construction until we design mockup ( below are placeholders)
            <br />
            <br />
            Pick your mode → Deep Focus, Exam Cram, or Creative Flow.
            <br />
            Tap start → your personalized session begins.
            <br />
            Let StudyFlow guide you → music, timers, and nudges shift naturally
            to keep you engaged.
            <br />
            See your progress → track consistency, build habits, and stay
            motivated.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-[1110px]">
          {serviceCards.map((card, index) => (
            <Card
              key={index}
              className={`${index === 0 ? "lg:col-span-1" : index === 1 ? "lg:col-span-1" : "lg:col-span-1"} ${index >= 2 ? "lg:col-span-1" : ""} bg-[#0d0e14] border-[#212429] ${index === 0 ? "border-none before:content-[''] before:absolute before:inset-0 before:p-[0.5px] before:rounded-xl before:[background:linear-gradient(163deg,rgba(150,234,99,1)_0%,rgba(30,47,20,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none" : ""} overflow-hidden relative`}
            >
              <CardContent className="p-6 h-full">
                <div className="flex flex-col gap-6 h-full">
                  <div className="flex flex-col gap-4">
                    <h3 className="[font-family:'Manrope',Helvetica] font-bold text-white text-xl">
                      {card.title}
                    </h3>
                    <p className="[font-family:'Manrope',Helvetica] font-normal text-[#a6a7ad] text-[15px] leading-[22.4px]">
                      {card.description}
                    </p>
                  </div>

                  {card.type === "tags" && card.tags && (
                    <div className="flex flex-col gap-[13px] mt-8">
                      <div className="flex flex-wrap gap-[13px]">
                        {card.tags.slice(0, 4).map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            className="h-[34.5px] bg-[#07070a] border-[#1a1c29] text-[#cfd3da] text-[12.3px] font-normal [font-family:'Inter',Helvetica] hover:bg-[#07070a]"
                          >
                            <img
                              className="w-[18.45px] h-[14.76px] mr-2.5"
                              alt="Icon"
                              src={tag.icon}
                            />
                            {tag.text}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-[13px]">
                        {card.tags.slice(4, 8).map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            className="h-[34.5px] bg-[#07070a] border-[#1a1c29] text-[#cfd3da] text-[12.3px] font-normal [font-family:'Inter',Helvetica] hover:bg-[#07070a]"
                          >
                            <img
                              className="w-[18.45px] h-[14.76px] mr-2.5"
                              alt="Icon"
                              src={tag.icon}
                            />
                            {tag.text}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-[13px]">
                        {card.tags.slice(8, 12).map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            className="h-[34.5px] bg-[#07070a] border-[#1a1c29] text-[#cfd3da] text-[12.3px] font-normal [font-family:'Inter',Helvetica] hover:bg-[#07070a]"
                          >
                            <img
                              className="w-[18.45px] h-[14.76px] mr-2.5"
                              alt="Icon"
                              src={tag.icon}
                            />
                            {tag.text}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {card.type === "team" && (
                    <>
                      <div className="absolute w-[452px] h-[323px] top-[-174px] left-[255px] bg-[#62ff8e] rounded-[225.87px/161.39px] blur-[105.24px] opacity-10" />
                      <img
                        className="absolute w-[326px] h-[65px] -top-6 left-[188px]"
                        alt="Team visualization"
                        src="https://c.animaapp.com/mfjk9ur3zlxBhT/img/image.png"
                      />
                      <img
                        className="absolute w-[614px] h-28 top-[131px] -left-16"
                        alt="Vector decoration"
                        src="https://c.animaapp.com/mfjk9ur3zlxBhT/img/vector-25.svg"
                      />
                      <div className="absolute top-[155px] left-[142px] bg-[#0d0e14] rounded-[69px] border-[0.77px] border-[#4d4f5c] shadow-[inset_0px_-6px_6.6px_#abee821a,inset_0px_6px_6.6px_#abee821a] p-[18.5px]">
                        <div className="flex items-center gap-[8.48px]">
                          <img
                            className="w-[18.5px] h-[18.5px]"
                            alt="Envelope"
                            src="https://c.animaapp.com/mfjk9ur3zlxBhT/img/envelopesimple.svg"
                          />
                          <span className="[font-family:'Inter',Helvetica] font-medium text-[#cfd3da] text-[12.3px]">
                            Invite user to this team
                          </span>
                        </div>
                      </div>
                    </>
                  )}

                  {card.type === "code" && (
                    <div className="flex-1 [font-family:'IBM_Plex_Mono',Helvetica] font-normal text-xs leading-3">
                      <span className="text-[#737479]">
                        // SPDX-License-Identifier
                      </span>
                      <span className="text-[#77d62b]">:</span>
                      <span className="text-[#737479]">
                        {" "}
                        MIT pragma solidity ^0.8.0; import
                      </span>
                      <span className="text-[#77d62b]">".</span>
                      <span className="text-[#737479]">/IERC20.</span>
                      <span className="text-[#e6db5a]">sol</span>
                      <span className="text-[#77d62b]">";</span>
                      <span className="text-[#737479]"> contract MyToken </span>
                      <span className="text-[#42cbe2]">is</span>
                      <span className="text-[#737479]"> IERC20 </span>
                      <span className="text-white">{"{"}</span>
                      <span className="text-[#737479]">
                        {" "}
                        &nbsp;&nbsp;&nbsp;&nbsp;string public name{" "}
                      </span>
                      <span className="text-white">=</span>
                      <span className="text-[#737479]">&nbsp;</span>
                      <span className="text-[#77d62b]">"</span>
                      <span className="text-[#77d62b]">MyToken</span>
                      <span className="text-[#77d62b]">"</span>
                      <span className="text-white">;</span>
                      <span className="text-[#737479]">
                        {" "}
                        &nbsp;&nbsp;&nbsp;&nbsp;string public symbol{" "}
                      </span>
                      <span className="text-white">=</span>
                      <span className="text-[#737479]">&nbsp;</span>
                      <span className="text-[#77d62b]">"</span>
                      <span className="text-[#77d62b]">MT</span>
                      <span className="text-[#77d62b]">"</span>
                      <span className="text-white">;</span>
                      <span className="text-[#737479]">
                        {" "}
                        &nbsp;&nbsp;&nbsp;&nbsp;uint256 public override
                        totalSupply
                      </span>
                      <span className="text-[#77d62b]">;</span>
                      <span className="text-[#737479]">
                        {" "}
                        &nbsp;&nbsp;&nbsp;&nbsp;mapping(
                      </span>
                      <span className="text-[#42cbe2]">address</span>
                      <span className="text-[#737479]">&nbsp;</span>
                      <span className="text-white">=&gt;</span>
                      <span className="text-[#737479]">&nbsp;</span>
                      <span className="text-[#e6db5a]">uint256</span>
                      <span className="text-[#737479]">
                        ) public override balanceOf;
                        &nbsp;&nbsp;&nbsp;&nbsp;mapping(
                      </span>
                      <span className="text-[#42cbe2]">address</span>
                      <span className="text-[#737479]">&nbsp;</span>
                      <span className="text-white">=&gt;</span>
                      <span className="text-[#737479]">&nbsp;</span>
                      <span className="text-[#e6db5a]">mapping</span>
                      <span className="text-white">(</span>
                      <span className="text-[#737479]">address </span>
                      <span className="text-white">=&gt; </span>
                      <span className="text-[#737479]">uint256</span>
                      <span className="text-white">))</span>
                      <span className="text-[#737479]">
                        {" "}
                        public override allowance;
                      </span>
                    </div>
                  )}

                  {card.type === "blockchain" && (
                    <img
                      className="w-full h-[223px]"
                      alt="Blockchain visualization"
                      src="https://c.animaapp.com/mfjk9ur3zlxBhT/img/vertical-container.svg"
                    />
                  )}

                  {card.type === "web3" && (
                    <div className="flex flex-col gap-[22px]">
                      {web3Tags.map((tagRow, rowIndex) => (
                        <div
                          key={rowIndex}
                          className="flex justify-between gap-4"
                        >
                          {tagRow.map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              className="bg-[#0d0f13] border-[#212429] text-white text-sm font-normal [font-family:'Manrope',Helvetica] px-4 py-2 rounded-[80px] hover:bg-[#0d0f13]"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="absolute w-[333px] h-[333px] top-[-213px] left-[103px] rounded-[166.5px] blur-[72.55px] [background:radial-gradient(50%_50%_at_67%_66%,rgba(255,255,255,1)_0%,rgba(13,15,19,1)_100%)] opacity-20" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div> */}

      <div className="flex flex-col w-full max-w-[1106px] items-start gap-[72px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
        <div className="flex w-full items-start gap-[72px]">
          <h2 className="flex-1 font-bold text-white text-[40px] leading-[56px]">
            What our app users are saying
          </h2>
          <div className="flex items-start gap-3">
            <Button className="h-auto flex items-center justify-center px-6 py-3 rounded-[100px] bg-[linear-gradient(226deg,rgba(112,207,228,1)_0%,rgba(152,129,229,1)_100%)] hover:opacity-90 transition-opacity">
              <ArrowLeft className="w-8 h-8" />
            </Button>
            <Button className="h-auto flex items-center justify-center px-6 py-3 rounded-[100px] bg-[linear-gradient(46deg,rgba(112,207,228,1)_0%,rgba(152,129,229,1)_100%)] hover:opacity-90 transition-opacity">
              <ArrowRight className="w-8 h-8" />
            </Button>
          </div>
        </div>

        <div className="flex gap-[34px] w-full">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="flex-1 bg-[#0d0e14] border-[#212429] overflow-hidden relative"
            >
              <CardContent className="p-6">
                <div className="absolute w-[333px] h-[333px] top-[-209px] left-[327px] rounded-[166.5px] blur-[72.55px] [background:radial-gradient(50%_50%_at_67%_66%,rgba(255,255,255,1)_0%,rgba(13,15,19,1)_100%)] opacity-20" />

                <div className="flex flex-col gap-8">
                  <h3 className="font-bold text-white text-2xl leading-[33.6px]">
                    {testimonial.title}
                  </h3>

                  <p className="font-normal text-[#a4a7ae] text-base leading-[28.8px]">
                    {testimonial.content}
                  </p>

                  <div className="flex items-start gap-3">
                    <div
                      className="w-12 h-12 bg-cover bg-center rounded-full"
                      style={{ backgroundImage: `url(${testimonial.avatar})` }}
                    />
                    <div className="flex flex-col">
                      <div className="font-caption-LG font-[number:var(--caption-LG-font-weight)] text-white text-[length:var(--caption-LG-font-size)] tracking-[var(--caption-LG-letter-spacing)] leading-[var(--caption-LG-line-height)] [font-style:var(--caption-LG-font-style)]">
                        {testimonial.author}
                      </div>
                      <div className="font-caption-MD font-[number:var(--caption-MD-font-weight)] text-[#a4a7ae] text-[length:var(--caption-MD-font-size)] tracking-[var(--caption-MD-letter-spacing)] leading-[var(--caption-MD-line-height)] [font-style:var(--caption-MD-font-style)]">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex w-full max-w-[1106px] items-center gap-[38px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
        <div className="w-[408px]">
          <h2 className=" font-bold text-black-whitewhite text-[40px] leading-[56px] mb-9">
            Download the app now
          </h2>

          <p className="font-normal text-[#a4a7ae] text-lg leading-[32.4px] mb-[133px]">
            Transform the way you study — one session at a time.
          </p>

          <div className="flex gap-6">
            <div className="flex items-center gap-3">
              <img
                className="w-[41px] h-[49px]"
                alt="App Store"
                src={AppStoreIcon}
              />
              <div className="text-white text-sm">
                <div className="tracking-[-0.04px]">Download on the</div>
                <div className="font-semibold text-lg tracking-[-0.06px]">
                  App Store
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img
                className="w-11 h-[50px]"
                alt="Google Play"
                src={GooglePlayIcon}
              />
              <div className="text-white text-sm">
                <div className="tracking-[-0.04px]">GET IT ON</div>
                <div className="font-semibold text-lg tracking-[-0.06px]">
                  Google Play
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          className="w-[589.01px] h-[305px]"
          alt="iPhone mockup"
          src={IphoneMockup}
        />
      </div>

      <div className="flex w-full max-w-[1106px] items-start gap-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
        <div className="flex flex-col w-[539px] items-start gap-[50px]">
          <h2 className="font-bold text-white text-[40px] leading-[48px]">
            Get in touch
          </h2>
          <p className="font-normal text-[#a4a7ae] text-lg leading-[25.2px]">
            Contact us for additional details or assistance.
          </p>
        </div>

        <div className="flex flex-col items-start gap-6 flex-1">
          <div className="flex flex-col items-start gap-2 w-full">
            <label className="font-normal text-white text-sm leading-[22.4px]">
              Name
            </label>
            <Input
              placeholder="Name"
              className="bg-[#14151f] border-none text-[#7a7b85] w-full font-normal text-sm leading-[22.4px] px-4 py-3 rounded-lg"
            />
          </div>

          <div className="flex flex-col items-start gap-2 w-full">
            <label className="font-normal text-white text-sm leading-[22.4px]">
              E-mail
            </label>
            <Input
              placeholder="E-mail"
              type="email"
              className="bg-[#14151f] border-none text-[#7a7b85] font-normal text-sm leading-[22.4px] px-4 py-3 rounded-lg"
            />
          </div>

          <div className="flex flex-col items-start gap-2 w-full">
            <label className="font-normal text-white text-sm leading-[22.4px]">
              Message
            </label>
            <Textarea
              placeholder="Add your message"
              className="h-[182px] bg-[#14151f] border-none text-[#7a7b85] font-normal text-sm leading-[22.4px] px-4 py-3 rounded-lg resize-none"
            />
          </div>

          <Button className="h-auto w-full bg-[linear-gradient(46deg,rgba(112,207,228,1)_0%,rgba(152,129,229,1)_100%)] text-[#07070a] font-normal text-base leading-[19.2px] px-5 py-2.5 rounded-[48px] hover:opacity-90 transition-opacity">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
