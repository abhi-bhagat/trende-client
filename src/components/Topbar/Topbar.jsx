import "./Topbar.scss";

//
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../context/dashboardTheme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { Link } from "react-router-dom";

const Topbar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const colorMode = useContext(ColorModeContext);

	return (
		<Box
			className="topbar-container"
			display="flex"
			justifyContent={"space-between"}
		>
			<Box
				className="topbar-search"
				display={"flex"}
				backgroundColor={colors.primary[400]}
				borderRadius="4px"
				size="small"
				height={"2rem"}
			>
				<InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" size="small" />
				<IconButton type="button" sx={{ p: 1 }} size="small">
					<SearchIcon fontSize="small" />
				</IconButton>
			</Box>
			<Box className="topbar-icons" display={"flex"}>
				<IconButton
					size="small"
					sx={{ height: "2rem", width: "2rem" }}
					onClick={colorMode.toggleColorMode}
				>
					{theme.palette.mode === "dark" ? (
						<LightModeOutlinedIcon fontSize="small" />
					) : (
						<DarkModeOutlinedIcon fontSize="small" />
					)}
				</IconButton>
				<IconButton size="small" sx={{ height: "2rem", width: "2rem" }}>
					<Link to="/dashboard/lowProducts">
						<NotificationsNoneOutlinedIcon fontSize="small" />
					</Link>
				</IconButton>
				<IconButton size="small" sx={{ height: "2rem", width: "2rem" }}>
					<Link to="/">
						<ExitToAppOutlinedIcon fontSize="small" />
					</Link>
				</IconButton>
				<IconButton size="small" sx={{ height: "2rem", width: "2rem" }}>
					<PersonOutlineOutlinedIcon
						sx={{ borderRadius: "100%" }}
						fontSize="small"
					/>
				</IconButton>
			</Box>
		</Box>
	);
};

export default Topbar;
