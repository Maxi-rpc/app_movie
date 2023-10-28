import * as React from "react";
// material ui
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
// footer
const yearNow = new Date().getFullYear();

const Copyright = () => {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://github.com/Maxi-rpc">
				Github/Maxi-rpc
			</Link>{" "}
			{yearNow}
			{"."}
		</Typography>
	);
};

export const FooterMain = () => {
	return (
		<>
			<Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
				<Container maxWidth="lg">
					<Typography variant="h6" align="center" gutterBottom>
						App Movie Next js
					</Typography>
					<Typography
						variant="subtitle1"
						align="center"
						color="text.secondary"
						component="p"
					>
						By Max
					</Typography>
					<Copyright />
				</Container>
			</Box>
		</>
	);
};
