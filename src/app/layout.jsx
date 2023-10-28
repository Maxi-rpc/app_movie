import { Inter } from "next/font/google";
import "./globals.css";

// proyect
import { HeaderMain, ContainerMain } from "@/components";

// Layout
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "App Movie",
	description: "By maxi-rpc",
};

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body className={inter.className}>
				<HeaderMain />
				<ContainerMain>{children}</ContainerMain>
			</body>
		</html>
	);
}
