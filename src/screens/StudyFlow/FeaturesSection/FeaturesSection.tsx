// import { Badge } from "../../../components/ui/badge";
import { useState } from "react";
import axios from "axios";
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
	const [formData, setFormData] = useState({
		name: "",
		from: "",
		message: ""
	});
	const [isLoading, setIsLoading] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setSubmitStatus('idle');

		try {
			const contactUrl = import.meta.env.VITE_API_CONTACT;
			if (!contactUrl) {
				throw new Error('Contact API URL not configured');
			}

			await axios.post(contactUrl, {
				from: formData.from,
				message: formData.message,
				name: formData.name
			});

			setSubmitStatus('success');
			setFormData({ name: "", from: "", message: "" }); // Reset form
		} catch (error) {
			console.error('Failed to send message:', error);
			setSubmitStatus('error');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center w-full relative pt-24 sm:pt-28 px-4 sm:px-6">
			{/* Hero copy */}
			<div className="flex flex-col items-center w-full max-w-[1110px] gap-8 sm:gap-12">
				<div className="flex flex-col w-full max-w-[948px] items-center gap-4 sm:gap-6 px-0">
					<h1 className="text-center font-black text-white leading-[1.02] tracking-tight text-[clamp(2.2rem,8vw,5.3rem)]">
						All your focus tools finally together
					</h1>
					<p className="text-center font-normal text-[#d3d3d6] text-base sm:text-lg leading-relaxed">
						Where focus finds its flow
					</p>
				</div>
				<div className="relative h-[52px] flex items-center justify-center">
					<div className="w-[146px] h-[37px] rounded-[60px] blur-[11.5px] bg-[linear-gradient(52deg,rgba(129,164,229,1)_0%,rgba(137,201,233,1)_54%,rgba(147,115,236,1)_100%)] opacity-50 absolute top-[15px] left-1/2 -translate-x-1/2" />
					<Button className="h-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full absolute bg-[linear-gradient(46deg,rgba(143,100,254,1)_0%,rgba(57,209,229,1)_100%)] text-[#1e2f14] text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity">
						See How It Works
						<img className="w-[5.25px] h-[9.63px]" alt="" src={ChevronRight} />
					</Button>
				</div>
			</div>

			{/* Features grid */}
			<div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 w-full max-w-[1110px]">
				{features.map((feature, index) => (
					<div
						key={index}
						className="flex flex-col min-w-[220px] items-start gap-2"
					>
						<div className="flex items-center gap-2 w-full">
							<img
								className="w-7 h-7"
								alt="Feature icon"
								src={feature.icon}
							/>
							<h3 className="font-bold text-white text-base sm:text-lg">
								{feature.title}
							</h3>
						</div>
						<p className="font-normal text-[#d3d3d6] text-sm leading-6">
							{feature.description}
						</p>
					</div>
				))}
			</div>

			{/* Testimonials */}
			<div className="mt-24 sm:mt-32 flex flex-col w-full max-w-[1110px] items-start gap-10 sm:gap-[72px]">
				<div className="flex flex-col sm:flex-row w-full items-start sm:items-center gap-6 sm:gap-[72px]">
					<h2 className="flex-1 font-bold text-white text-2xl sm:text-[40px] leading-tight sm:leading-[56px]">
						What our app users are saying
					</h2>
					<div className="hidden sm:flex items-start gap-3">
						<Button className="h-auto flex items-center justify-center px-5 py-2.5 rounded-full bg-[linear-gradient(46deg,rgba(143,100,254,1)_0%,rgba(57,209,229,1)_100%)] hover:opacity-90 transition-opacity">
							<ArrowLeft className="w-6 h-6" />
						</Button>
						<Button className="h-auto flex items-center justify-center px-5 py-2.5 rounded-full bg-[linear-gradient(46deg,rgba(143,100,254,1)_0%,rgba(57,209,229,1)_100%)] hover:opacity-90 transition-opacity">
							<ArrowRight className="w-6 h-6" />
						</Button>
					</div>
				</div>

				<div className="flex sm:hidden gap-3 mb-2">
					<Button className="h-auto flex items-center justify-center px-4 py-2 rounded-full bg-[linear-gradient(46deg,rgba(143,100,254,1)_0%,rgba(57,209,229,1)_100%)]">
						<ArrowLeft className="w-5 h-5" />
					</Button>
					<Button className="h-auto flex items-center justify-center px-4 py-2 rounded-full bg-[linear-gradient(46deg,rgba(143,100,254,1)_0%,rgba(57,209,229,1)_100%)]">
						<ArrowRight className="w-5 h-5" />
					</Button>
				</div>

				<div className="flex gap-6 w-full overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
					{testimonials.map((testimonial, index) => (
						<Card
							key={index}
							className="min-w-[85%] sm:min-w-0 flex-1 bg-[#0d0e14] border-[#212429] overflow-hidden relative snap-start"
						>
							<CardContent className="p-5 sm:p-6">
								<div className="absolute w-[260px] h-[260px] -top-40 right-0 rounded-full blur-[72.55px] [background:radial-gradient(50%_50%_at_67%_66%,rgba(255,255,255,1)_0%,rgba(13,15,19,1)_100%)] opacity-10" />
								<div className="flex flex-col gap-6 sm:gap-8">
									<h3 className="font-bold text-white text-xl sm:text-2xl leading-snug">
										{testimonial.title}
									</h3>
									<p className="font-normal text-[#a4a7ae] text-sm sm:text-base leading-relaxed">
										{testimonial.content}
									</p>
									<div className="flex items-start gap-3">
										<div
											className="w-12 h-12 bg-cover bg-center rounded-full flex-shrink-0"
											style={{
												backgroundImage: `url(${testimonial.avatar})`,
											}}
										/>
										<div className="flex flex-col">
											<div className="text-white text-sm sm:text-base font-semibold">
												{testimonial.author}
											</div>
											<div className="text-[#a4a7ae] text-xs sm:text-sm">
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

			{/* Download CTA */}
			<div className="mt-24 sm:mt-32 flex flex-col-reverse lg:flex-row w-full max-w-[1110px] items-center gap-10 sm:gap-[38px]">
				<div className="w-full lg:w-[408px]">
					<h2 className="font-bold text-white text-2xl sm:text-[40px] leading-tight sm:leading-[56px] mb-6">
						Download the app now
					</h2>
					<p className="font-normal text-[#a4a7ae] text-base sm:text-lg leading-relaxed mb-10">
						Transform the way you study — one session at a time.
					</p>
					<div className="flex gap-6 flex-wrap">
						<div className="flex items-center gap-3">
							<img
								className="w-10 h-12"
								alt="App Store"
								src={AppStoreIcon}
							/>
							<div className="text-white text-xs sm:text-sm">
								<div className="tracking-[-0.04px]">Download on the</div>
								<div className="font-semibold text-base sm:text-lg tracking-[-0.06px]">
									App Store
								</div>
							</div>
						</div>
						<div className="flex items-center gap-3">
							<img
								className="w-11 h-12"
								alt="Google Play"
								src={GooglePlayIcon}
							/>
							<div className="text-white text-xs sm:text-sm">
								<div className="tracking-[-0.04px]">GET IT ON</div>
								<div className="font-semibold text-base sm:text-lg tracking-[-0.06px]">
									Google Play
								</div>
							</div>
						</div>
					</div>
				</div>
				<img
					className="w-full max-w-[520px] lg:max-w-none lg:w-[589.01px] h-auto"
					alt="iPhone mockup"
					src={IphoneMockup}
				/>
			</div>

			{/* Contact */}
			<div id="contact" className="mt-24 sm:mt-32 flex flex-col lg:flex-row w-full max-w-[1110px] items-start gap-10 sm:gap-8">
				<div className="flex flex-col w-full lg:w-[520px] items-start gap-6">
					<h2 className="font-bold text-white text-2xl sm:text-[40px] leading-snug">
						Get in touch
					</h2>
					<p className="font-normal text-[#a4a7ae] text-base sm:text-lg leading-relaxed">
						Contact us for additional details or assistance.
					</p>
				</div>
				<form onSubmit={handleSubmit} className="flex flex-col items-start gap-6 flex-1 w-full">
					<div className="flex flex-col items-start gap-2 w-full">
						<label className="font-normal text-white text-xs sm:text-sm">
							Name
						</label>
						<Input
							name="name"
							value={formData.name}
							onChange={handleInputChange}
							placeholder="Name"
							className="bg-[#14151f] border-none text-[#7a7b85] w-full text-sm px-4 py-3 rounded-lg"
							required
						/>
					</div>
					<div className="flex flex-col items-start gap-2 w-full">
						<label className="font-normal text-white text-xs sm:text-sm">
							E-mail
						</label>
						<Input
							name="from"
							value={formData.from}
							onChange={handleInputChange}
							placeholder="E-mail"
							type="email"
							className="bg-[#14151f] border-none text-[#7a7b85] text-sm px-4 py-3 rounded-lg"
							required
						/>
					</div>
					<div className="flex flex-col items-start gap-2 w-full">
						<label className="font-normal text-white text-xs sm:text-sm">
							Message
						</label>
						<Textarea
							name="message"
							value={formData.message}
							onChange={handleInputChange}
							placeholder="Add your message"
							className="h-[150px] sm:h-[182px] bg-[#14151f] border-none text-[#7a7b85] text-sm px-4 py-3 rounded-lg resize-none"
							required
						/>
					</div>
					{submitStatus === 'success' && (
						<div className="w-full p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
							<p className="text-green-400 text-sm">Message sent successfully!</p>
						</div>
					)}
					{submitStatus === 'error' && (
						<div className="w-full p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
							<p className="text-red-400 text-sm">Failed to send message. Please try again.</p>
						</div>
					)}
					<Button 
						type="submit"
						disabled={isLoading}
						className="h-auto w-full bg-[linear-gradient(46deg,rgba(143,100,254,1)_0%,rgba(57,209,229,1)_100%)] text-[#07070a] text-sm sm:text-base px-5 py-3 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
					>
						{isLoading ? 'Sending...' : 'Submit'}
					</Button>
				</form>
			</div>
		</div>
	);
};
