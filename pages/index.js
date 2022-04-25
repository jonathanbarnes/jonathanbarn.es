import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>👋 jonathanbarn.es</title>
			</Head>
			<style jsx global>{`
				html,
				body {
					height: 100%;
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
						Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
						Helvetica Neue, sans-serif;
				}

				* {
					box-sizing: border-box;
				}

				#__next {
					height: 100%;
				}

				main {
					height: 100%;
					width: 100%;
					display: grid;
					place-content: center;
					gap: 1ch;
				}
			`}</style>
			<main>
				<h1>👋</h1>
			</main>
		</>
	);
}
