import "./Sidebar.scss";
import "react-pro-sidebar/dist/scss/styles.scss";

import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../context/dashboardTheme";

//icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import NotificationImportantOutlinedIcon from "@mui/icons-material/NotificationImportantOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import avatar from "../../assets/images/avatar.png";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
const Item = ({ title, to, icon, selected, setSelected }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<MenuItem
			active={selected === title}
			style={{
				color: colors.grey[100],
			}}
			onClick={() => setSelected(title)}
			icon={icon}
		>
			<Typography>{title}</Typography>
			<Link to={to} />
		</MenuItem>
	);
};
const uName = localStorage.getItem("name")
const Sidebar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [selected, setSelected] = useState();
	return (
		<Box
			className="sidebar"
			sx={{
				"& .pro-sidebar-inner": {
					background: `${colors.primary[400]} !important`,
				},
				"& .pro-icon-wrapper": {
					backgroundColor: "transparent !important",
				},
				"& .pro-inner-item": {
					padding: ".3125rem 2.1875rem .3125rem 1.25rem",
				},

				"& .pro-inner-item:hover": {
					color: "#FF5545 !important",
				},
				"& .pro-menu-item.active": {
					color: "#FF5545 !important",
				},
			}}
		>
			<ProSidebar collapsed={isCollapsed}>
				<Menu iconShape="square">
					<MenuItem
						className="sidebar__menu--collapse"
						onClick={() => {
							// setIsCollapsed(!isCollapsed);
						}}
						icon={
							isCollapsed ? (
								<MenuOutlinedIcon
									onClick={() => {
										setIsCollapsed(false);
									}}
								/>
							) : (
								<ArrowBackOutlinedIcon
									onClick={() => {
										setIsCollapsed(true);
									}}
								/>
							)
						}
						style={{
							color: colors.grey[100],
							margin: "10px 0 20px 0",
						}}
					></MenuItem>
					{!isCollapsed && (
						<Box mb="25px">
							<Box display="flex" justifyContent="center" alignItems="center">
								<img
									className="sidebar__avatar"
									alt="profile-user"
									width="1rem"
									height="1rem"
									src={avatar}
									style={{ cursor: "pointer", borderRadius: "50%" }}
								/>
							</Box>
							<Box textAlign="center">
								<Typography
									variant="h5"
									color={colors.grey[100]}
									fontWeight="bold"
									sx={{ m: "10px 0 0 0" }}
								>
									{uName}
								</Typography>
							</Box>
						</Box>
					)}

					<Box paddingLeft={isCollapsed ? "15%" : "10%"}>
						<Item
							title="Dashboard"
							to="/dashboard"
							icon={<HomeOutlinedIcon />}
							selected={selected}
							setSelected={() => setSelected("Dashboard")}
						/>
						<Item
							title="Products"
							to="/dashboard/products"
							icon={<FormatListBulletedOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Add Products"
							to="/dashboard/addProduct"
							icon={<AddBoxOutlinedIcon />}
							selected={selected}
							setSelected={() => setSelected("Add Products")}
						/>

						<Item
							title="Sales"
							to="/dashboard/sales"
							icon={<TrendingUpOutlinedIcon />}
							selected={selected}
							setSelected={() => setSelected("Sales")}
						/>
						<Item
							title="Calendar"
							to="/dashboard/calendar"
							icon={<CalendarMonthOutlinedIcon />}
							selected={selected}
							setSelected={() => setSelected("Celandar")}
						/>
						<Item
							title="Alert"
							to="/dashboard/lowProducts"
							icon={<NotificationImportantOutlinedIcon />}
							selected={selected}
							setSelected={() => setSelected("Alert")}
						/>
					</Box>
				</Menu>
			</ProSidebar>
		</Box>
	);
};

export default Sidebar;
