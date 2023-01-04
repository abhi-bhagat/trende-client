import "./dashboard.scss";
//

import axios from "axios";
import { useState, useEffect } from "react";
// theme
import { ColorModeContext, useMode } from "../../context/dashboardTheme";
import { CssBaseline, ThemeProvider, Box, Typography } from "@mui/material";
import { tokens } from "../../context/dashboardTheme";
//components
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Sales_component from "../../components/Sales_component/Sales_component";
import Boxes from "../../components/Boxes/Boxes";
// styles
//icons
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

const Dashboard = () => {
	const [theme, colorMode] = useMode();
	const colors = tokens(theme.palette.mode);

	const [data, setData] = useState([]);
	const [myTransactions, setMyTransactions] = useState([]);
	let mySales = 0;
	//fetch total sales

	useEffect(() => {
		axios
			.get(`http://localhost:8080/dashboard/monthlySales`)
			.then((data) => {
				setData(data.data);
			})
			.catch((e) => console.log(`Error fetching monthly sales`));
	}, []);
	//

	//TS
	useEffect(() => {
		axios
			.get(`http://localhost:8080/dashboard/getTransactions`)
			.then((data) => {
				setMyTransactions(data.data);
			})
			.catch((e) => console.log(`Error fetching monthly sales`));
	}, []);
	//
	const getTotalSales = (data) => {
		data.forEach((element) => {
			console.log(element.Sales);
			mySales = mySales + element.Sales;
		});
	};

	getTotalSales(data);
	console.log(`My sales are `, mySales);
	//

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<div className="dashboard__container">
					<Sidebar />
					<div
						className="dashboard__main"
						style={{
							backgroundColor:
								theme.palette.mode === "light"
									? "white"
									: colors.blueAccent[900],
						}}
					>
						<Topbar />
						<Box height="50vh" marginTop={"1.25rem"}>
							<Box
								display="grid"
								gridTemplateColumns="repeat(12, 1fr)"
								gridAutoRows="240px"
								gap="20px"
							>
								{/* ROW 1 */}
								<Box
									gridColumn="span 3"
									backgroundColor={colors.primary[400]}
									display="flex"
									alignItems="center"
									justifyContent="center"
								>
									<Boxes
										title="123"
										subtitle="New Orders"
										progress="0.75"
										increase="+14%"
										icon={
											<AddShoppingCartOutlinedIcon
												sx={{
													color: colors.greenAccent[600],
													fontSize: "26px",
												}}
											/>
										}
									/>
								</Box>
								<Box
									gridColumn="span 3"
									backgroundColor={colors.primary[400]}
									display="flex"
									alignItems="center"
									justifyContent="center"
								>
									<Boxes
										title={mySales}
										subtitle="Total Sales"
										progress="0.50"
										increase="+21%"
										icon={
											<AttachMoneyOutlinedIcon
												sx={{
													color: colors.greenAccent[600],
													fontSize: "26px",
												}}
											/>
										}
									/>
								</Box>
								<Box
									gridColumn="span 3"
									backgroundColor={colors.primary[400]}
									display="flex"
									alignItems="center"
									justifyContent="center"
								>
									<Boxes
										title="15"
										subtitle="New Clients"
										progress="0.30"
										increase="+5%"
										icon={
											<PersonAddAlt1OutlinedIcon
												sx={{
													color: colors.greenAccent[600],
													fontSize: "26px",
												}}
											/>
										}
									/>
								</Box>
								<Box
									gridColumn="span 3"
									backgroundColor={colors.primary[400]}
									display="flex"
									alignItems="center"
									justifyContent="center"
								>
									<Boxes
										title="1,325,134"
										subtitle="Traffic Received"
										progress="0.80"
										increase="+43%"
										// icon={
										//   <TrafficIcon
										//     sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
										//   />
										// }
									/>
								</Box>

								{/* ROW 2 */}
								<Box
									gridColumn="span 8"
									gridRow="span 2"
									backgroundColor={colors.primary[400]}
								>
									<Box
										mt="25px"
										p="0 30px"
										display="flex "
										justifyContent="space-between"
										alignItems="center"
									>
										<Box width={"15%"}>
											<Typography
												variant="h6"
												fontWeight="600"
												color={colors.grey[100]}
											>
												Revenue Generated
											</Typography>
											<Typography
												variant="h5"
												fontWeight="bold"
												color={colors.greenAccent[500]}
											>
												{`$ ${mySales}`}
											</Typography>
										</Box>
										<Box width={"70%"}>
											<Sales_component />
										</Box>
									</Box>
									<Box height="250px" m="-20px 0 0 0"></Box>
								</Box>
								<Box
									gridColumn="span 4"
									gridRow="span 2"
									backgroundColor={colors.primary[400]}
									overflow="auto"
								>
									<Box
										display="flex"
										justifyContent="space-between"
										alignItems="center"
										borderBottom={`2px solid ${colors.primary[500]}`}
										colors={colors.grey[100]}
										p="15px"
									>
										<Typography
											color={colors.grey[100]}
											variant="h5"
											fontWeight="600"
										>
											Recent Transactions
										</Typography>
									</Box>
									{myTransactions.map((transaction, i) => (
										<Box
											key={`${transaction.order_id}-${i}`}
											display="flex"
											justifyContent="space-between"
											alignItems="center"
											borderBottom={`1px solid ${colors.primary[500]}`}
											p="15px"
										>
											<Box>
												<Typography color={colors.sitePrimary[500]} variant="p">
													{transaction.order_id}
												</Typography>
											</Box>
											<Box color={colors.grey[100]}>{transaction.date}</Box>
											<Box
												backgroundColor={colors.greenAccent[500]}
												p="5px 10px"
												borderRadius="4px"
											>
												${transaction.order_amount}
											</Box>
										</Box>
									))}
								</Box>

								{/* ROW 3 */}
							</Box>
						</Box>
					</div>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default Dashboard;
