import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";

const Home = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768); // Adjust the breakpoint according to your design
		};

		handleResize(); // Initial check

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className={`flex ${isMobile ? 'flex-col' : 'sm:flex-row'} h-[95vh] rounded-lg overflow-hidden bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg`}>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};

export default Home;
