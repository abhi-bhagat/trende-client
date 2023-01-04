import "./Sales.scss";
//
import { ColorModeContext, useMode } from "../../../context/dashboardTheme";
import { CssBaseline, ThemeProvider } from "@mui/material";

//components
import Topbar from "../../../components/Topbar/Topbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
//
import { tokens } from "../../../context/dashboardTheme";
//
import { Box } from "@mui/material";
//
//nivo
import { ResponsiveBar } from "@nivo/bar";
//

import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
const Sales = () => {
	// const [products, setProducts] = useState([]);
	const [theme, colorMode] = useMode();
	const colors = tokens(theme.palette.mode);

	const [salesData, setSalesData] = useState([]);
	console.log(localStorage.getItem("theme"));

	useEffect(() => {
		axios
			.get(`http://localhost:8080/dashboard/monthlySales`)
			.then((data) => {
				setSalesData(data.data);
			})
			.catch((e) => console.log(`Error fetching monthly sales`));
	}, []);



	const data = salesData;
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<div className="dashboard__container">
					<Sidebar />
					<div className="dashboard__main">
						<Topbar />
						<Box marginTop={"1.25rem"}>
							<Header
								title="Monthly Sales"
								subtitle={"Chart showing monthly sales"}
							></Header>

							<Box marginTop={"1.25rem"} height="70vh">
								<ResponsiveBar
									data={data}
									keys={["Sales"]}
									indexBy="Month"
									margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
									padding={0.3}
									valueScale={{ type: "linear" }}
									indexScale={{ type: "band", round: true }}
									colors={colors.sitePrimary[400]}
									theme={{
										axis: {
											domain: {
												line: {
													stroke: colors.grey[100],
												},
											},
											legend: {
												text: {
													fill: colors.grey[100],
												},
											},

											ticks: {
												line: {
													stroke: colors.grey[100],
													strokeWidth: 1,
												},
												text: {
													fill: colors.grey[100],
												},
											},
										},
										legends: {
											text: {
												fill: colors.grey[100],
											},
										},
									}}
									borderColor={{
										from: "color",
										modifiers: [["darker", 1.6]],
									}}
									fill="#000"
									axisTop={null}
									axisRight={null}
									axisBottom={{
										tickSize: 5,
										tickPadding: 5,
										tickRotation: 0,
										legend: "Month",
										legendPosition: "middle",
										legendOffset: 32,
									}}
									axisLeft={{
										tickSize: 5,
										tickPadding: 5,
										tickRotation: 0,
										legend: "Sales",
										legendPosition: "middle",
										legendOffset: -40,
									}}
									labelSkipWidth={12}
									labelSkipHeight={12}
									labelTextColor={{
										from: "color",
										modifiers: [["darker", 1.6]],
									}}
									legends={[
										{
											dataFrom: "keys",
											anchor: "bottom-right",
											direction: "column",
											justify: false,
											translateX: 120,
											translateY: 0,
											itemsSpacing: 2,
											itemWidth: 100,
											itemHeight: 20,
											itemDirection: "left-to-right",
											itemOpacity: 0.85,
											symbolSize: 20,
											effects: [
												{
													on: "hover",
													style: {
														itemOpacity: 1,
													},
												},
											],
										},
									]}
									role="application"
								/>
							</Box>
						</Box>
					</div>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default Sales;
