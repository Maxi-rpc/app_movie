// material ui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// project
import { minHeight_container } from "@/utils";

// boxcontainer
export const BoxContainer = ({ children }) => {
	return (
		<>
			<Container maxWidth="xl" disableGutters>
				<Box sx={{ bgcolor: "#cfe8fc", minHeight: minHeight_container }}>
					{children}
				</Box>
			</Container>
		</>
	);
};
