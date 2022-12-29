import "./alert.scss";
//
import { ColorModeContext, useMode } from "../../../context/dashboardTheme";
import { CssBaseline, ThemeProvider } from "@mui/material";

//components
import Topbar from "../../../components/Topbar/Topbar";
import Sidebar from "../../../components/Sidebar/Sidebar";

//

import { Box, useTheme } from "@mui/material";
import { tokens } from "../../../context/dashboardTheme";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
const Alert = () => {
	const [products, setProducts] = useState([]);
	const [theme, colorMode] = useMode();

	// const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	useEffect(() => {
		axios
			.get(`http://localhost:8080/dashboard/lowProducts`)
			.then((data) => {


				setProducts(data.data);
			})
			.catch((e) => console.log(`error fetching products`, e));
	}, []);

	const columns = [
		{ field: "product_id", headerName: "ID", flex: 1 },
		{ field: "product_name", headerName: "Name" },
		{
			field: "product_image",
			headerName: "Image",
			flex: 1,
			align: "center",
			renderCell: (params) => {
				return (
					<div>
						<img
							className="products__table__image"
							src={params.row.product_image}
							alt="cloth_images"
						/>
					</div>
				);
			},
		},

		{ field: "product_category", headerName: "Category" },
		{
			field: "product_qty",
			headerName: "Quantity",
			type: "number",
			headerAlign: "left",
			align: "left",
		},
		{ field: "product_price", headerName: "Price" },
	];
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<div className="dashboard__container">
					<Sidebar />
					<div className="dashboard__main">
						<Topbar />
						<Box m="1.25rem">
							<Header
								title="Low Products"
								subtitle={"Products you are short on"}
							></Header>
							<Box m="2.5rem 0 0 0" height="70vh">
								<DataGrid
									rows={products}
									columns={columns}
									getRowId={(row) => row.product_id}
									getRowHeight={() => {
										"auto";
									}}
									getEstimatedRowHeight={() => 200}
									rowHeight={160}
								></DataGrid>
							</Box>
						</Box>
					</div>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default Alert;
