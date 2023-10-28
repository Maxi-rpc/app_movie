// material
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// project
import { gridSpacing } from "@/utils";

// container
export const ContainerMain = ({ children }) => {
	return (
		<>
			{/* <Container maxWidth="xl">
				<Grid container spacing={gridSpacing}>
					<Grid item xs={12} md={12} lg={12}>
						{children}
					</Grid>
				</Grid>
			</Container> */}
			<Container maxWidth="xl">
				<Grid container spacing={gridSpacing}>
					<Grid item xs={12} md={12} lg={12}>
						{children}
					</Grid>
				</Grid>
			</Container>
			{/* <Grid container spacing={gridSpacing}>
				<Grid item xs={10} md={10} lg={10}>
					{children}
				</Grid>
			</Grid> */}
		</>
	);
};
