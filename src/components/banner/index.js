// material ui
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
// project
import { gridSpacing } from "@/utils";

// banner
export const Banner = () => {
	return (
		<>
			<Card sx={{ minHeight: "200px" }}>
				<CardContent>
					<Typography
						variant="h1"
						sx={{ fontSize: 30 }}
						color="text.secondary"
						gutterBottom
					>
						Buscar Pelicula
					</Typography>
					<Grid
						container
						spacing={gridSpacing}
						justifyContent="center"
						alignItems="center"
					>
						<Grid item xs={4} md={4} lg={4}>
							<TextField
								id="outlined-basic"
								label="Nombre"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={2} md={2} lg={2}>
							<Button fullWidth variant="contained">
								Buscar
							</Button>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</>
	);
};
