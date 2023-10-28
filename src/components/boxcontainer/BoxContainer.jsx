// material ui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// boxcontainer
export const BoxContainer = () => {
	return (
		<>
			<Container maxWidth="false">
				<Box sx={{ bgcolor: "#cfe8fc", height: "100px" }} />
			</Container>
		</>
	);
};
