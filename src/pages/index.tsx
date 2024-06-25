import { AnimatePage } from 'Atoms/AnimatePage';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';
import Typed from 'react-typed';

const IndexPage = () => {
	const talkAbout = [
		'React',
		'JavaScript',
		'TypeScript',
		'GraphQL',
		'Redux',
		'Jamstack',
		'Next.js',
		'RESTful APIs',
		'Rust',
		'Solidity',
		'HTML',
		'CSS',
		'Gatsby',
		'Svelte',
	];

	return (
		<AnimatePage>
			<SeoHead
				title="Senior Software Engineer – Matthew Nguyen"
				description={`A Full Stack Engineer with a focus on JavaScript and React. I have more than ${
					new Date().getFullYear() - 2016
				} years experience working in software engineering and consulting.`}
				keywords={[
					'Software Engineer',
					'Matthew Nguyen',
					'Software Consulting',
					'Front-End',
					'Full-Stack',
					'React',
					'TypeScript',
					'JavaScript',
					'GraphQL',
					'CSS',
					'Tailwind',
				]}
			/>
			<Container>
				<h1 className="headline mt-20 text-3xl md:text-5xl lg:text-6xl">
					Hey, I&apos;m Matthew Nguyen 👋
				</h1>
				<p className="my-8 text-lg">
					A seasoned Senior Blockchain Engineer with over 8 years of experience
					in smart contract design, development, and web3 application
					maintenance. Expert in leading projects ranging from innovative
					startups to complex enterprise-level solutions in fast-paced
					environments. Possesses a deep expertise in Solidity, TypeScript,
					JavaScript, Python, and Rust, alongside proficiency in frameworks like
					Truffle Suite and Hardhat. Known for delivering high-quality products,
					keen on adopting the latest industry technologies and trends. You can
					talk to me about{' '}
					<Typed
						loop
						typeSpeed={80}
						backSpeed={20}
						strings={talkAbout}
						smartBackspace
						backDelay={1000}
						loopCount={0}
						showCursor
						cursorChar="|"
					/>
					.
				</p>
			</Container>
		</AnimatePage>
	);
};

export default IndexPage;
