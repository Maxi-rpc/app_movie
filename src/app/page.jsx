// material ui
import Grid from "@mui/material/Grid";
// project
import { Banner, BoxContainer } from "@/components";
import { gridSpacing } from "@/utils";

// home
export default function Home() {
	return (
		<>
			<Grid container spacing={gridSpacing}>
				<Grid item xs={12} md={12} lg={12} textAlign="center">
					<Banner></Banner>
				</Grid>
				<Grid item xs={12} md={12} lg={12} textAlign="center">
					<BoxContainer></BoxContainer>
				</Grid>
			</Grid>
		</>
	);
}
