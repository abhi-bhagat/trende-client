import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../context/dashboardTheme";
import ProgressCircle from "../Circle/Circle";

const Boxes = ({ title, subtitle, icon, progress, increase }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box width="100%" m="0 30px">
			<Box display="flex" justifyContent="space-between">
				<Box>
					{icon}
					<Typography
						variant="h6"
						fontWeight="bold"
						sx={{ color: colors.grey[100] }}
					>
						{title}
					</Typography>
				</Box>
				<Box>
					<ProgressCircle progress={progress} />
				</Box>
			</Box>
			<Box display="flex" justifyContent="space-between" mt="2px">
				<Typography variant="h6" sx={{ color: colors.sitePrimary[500] }}>
					{subtitle}
				</Typography>
				<Typography
					variant="h5"
					fontStyle="italic"
					sx={{ color: colors.sitePrimary[600] }}
				>
					{increase}
				</Typography>
			</Box>
		</Box>
	);
};

export default Boxes;
