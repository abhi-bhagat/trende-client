import "./dashboard.scss";
// theme
import { ColorModeContext, useMode } from "../../context/dashboardTheme";
import { CssBaseline, ThemeProvider } from "@mui/material";

//components
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import AddProducts from "./AddProducts/AddProducts";
import DeleteProducts from "./DeleteProducts/DeleteProducts";
import UpdateProducts from "./UpdateProducts/UpdateProducts";
import Sales from "./Sales/Sales";
// styles

const Dashboard = () => {
	const [theme, colorMode] = useMode();
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

export default Dashboard;
