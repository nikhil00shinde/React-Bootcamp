import Head from "next/head";
import Feed from "../components/Feed";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Reels</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Feed />
		</div>
	);
}