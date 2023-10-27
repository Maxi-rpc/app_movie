import { get_movie } from "@/services";

export default function Home() {
	get_movie();
	return (
		<main>
			<h1>Hola Next js</h1>
		</main>
	);
}
