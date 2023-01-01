import "./DeleteProducts.scss";
//
import { ColorModeContext, useMode } from "../../../context/dashboardTheme";
import { CssBaseline, ThemeProvider } from "@mui/material";

//components
import Topbar from "../../../components/Topbar/Topbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
//
import { tokens } from "../../../context/dashboardTheme";

import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";

const DeleteProducts = () => {
	const [products, setProducts] = useState([]);
	const [theme, colorMode] = useMode();

	// const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	useEffect(() => {
		axios
			.get(`http://localhost:8080/dashboard`)
			.then((data) => {
				const abc = Object.entries(data.data);
				console.log("type is", typeof data.data);
				setProducts(data.data);
			})
			.catch((e) => console.log(`error fetching products`, e));
	}, []);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<div className="dashboard__container">
					<Sidebar />
					<div className="dashboard__main">
						<Topbar />
					</div>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default DeleteProducts;
