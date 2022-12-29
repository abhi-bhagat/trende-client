import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../context/dashboardTheme";

const Header = ({ title, subtitle }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<Box mb="30px">
			<Typography
				variant="h4"
				color={colors.grey[100]}
				fontWeight="bold"
				sx={{ m: "0 0 5px 0" }}
			>
				{title}
			</Typography>
			<Typography variant="h6" color={colors.sitePrimary[400]}>
				{subtitle}
			</Typography>
		</Box>
	);
};

export default Header;
