import AboutMeBio from '../components/about/AboutMeBio';
import AboutCounter from '../components/about/AboutCounter';
import { AboutMeProvider } from '../context/AboutMeContext';
import { motion } from 'framer-motion';
import AboutClients from "../components/about/AboutClients";

const About = () => {
	return (
		<AboutMeProvider>
			<motion.div
				initial={{ opacity: 0 }}
				// @ts-ignore
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutMeBio />
			</motion.div>

			{/** Counter without paddings */}
			<motion.div
				initial={{ opacity: 0 }}
				// @ts-ignore
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>
				<AboutCounter />
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				// @ts-ignore
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutClients />
			</motion.div>
		</AboutMeProvider>
	);
};

export default About;
