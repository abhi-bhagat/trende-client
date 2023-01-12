import "./AddProducts.scss";
//
import { ColorModeContext, useMode } from "../../../context/dashboardTheme";
import { CssBaseline, ThemeProvider } from "@mui/material";

//components
import Topbar from "../../../components/Topbar/Topbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
//
import { tokens } from "../../../context/dashboardTheme";

import axios from "axios";
import { useState } from "react";
import Header from "../../../components/Header/Header";
import { Box } from "@mui/system";

//icons
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
//
//toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//

const AddProducts = () => {
	const [theme, colorMode] = useMode();

	// const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	// form const
	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const [image, setImage] = useState("");
	const [qty, setQty] = useState("");
	const [price, setPrice] = useState("");
	const [color, setColor] = useState("");
	const [desc, setDesc] = useState("");
	const [company, setCompany] = useState("");

	//data to be sent
	const productData = {
		name: name,
		category: category,
		image: image,
		qty: qty,
		price: price,
		color: color,
		desc: desc,
		company: company,
	};
	//toast
	const showToastMessage = () => {
		toast.success("Product Added!", {
			position: toast.POSITION.TOP_CENTER,
			autoClose: 1500,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: false,
			draggable: false,
			progress: undefined,
			theme: "colored",
		});
	};
	const errorToastMessage = () => {
		toast.error("Unable to add product!", {
			position: toast.POSITION.TOP_CENTER,
			autoClose: 1500,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: false,
			draggable: false,
			progress: undefined,
			theme: "colored",
		});
	};
	// add handler
	const productAddHandler = (e) => {
		e.preventDefault();
		axios
			.post(`http://localhost:8080/dashboard/addProduct`, productData)
			.then(() => {
				showToastMessage();
			})
			.catch((e) => {
				console.log(`error fetching products`, e);
				errorToastMessage();
			});
	};
	if (!localStorage.getItem("name")) {
		// navigate("/admin");
		window.location.href=`http://localhost:3000/admin`

	}
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<div className="dashboard__container">
					<Sidebar />
					<div className="dashboard__main">
						<Topbar />
						<Box m={"1.25rem"}>
							<Header
								title="Add Products"
								subtitle={
									"Please fill out form to add products to your inventory"
								}
							/>

							<Box m="2.5rem 0 0 0" height="70vh">
								<ToastContainer
									position="top-center"
									autoClose={1500}
									hideProgressBar={false}
									newestOnTop={false}
									closeOnClick={false}
									rtl={false}
									pauseOnFocusLoss={false}
									draggable={false}
									pauseOnHover={false}
									theme="colored"
								/>
								<div className="w-full flex items-center justify-center ">
									<form
										className="  addProducts__form  shadow rounded py-6 border border-red-400 lg:px-28 px-8"
										onSubmit={(e) => {
											productAddHandler(e);
										}}
									>
										<div className="md:flex items-center">
											<div className="md:w-72 flex flex-col">
												<label
													className="text-base font-semibold leading-none text-gray-800 "
													style={{ color: colors.grey[100] }}
												>
													Name
												</label>
												<input
													tabIndex={0}
													arial-label="Please input name"
													type="text"
													className="contact-form__input text-base leading-none text-gray-900 p-3 focus:oultine-none    mt-4 bg-gray-100 border  border-gray-200 placeholder-gray-100"
													placeholder="Please input product name"
													required
													value={name}
													onChange={(e) => setName(e.target.value)}
												/>
											</div>
											<div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
												<label
													className="text-base font-semibold leading-none text-gray-800"
													style={{ color: colors.grey[100] }}
												>
													Category
												</label>
												<input
													tabIndex={0}
													arial-label="Please input email address"
													type="text"
													className="contact-form__input text-base leading-none text-gray-900 p-3 focus:oultine-none  mt-4 bg-gray-100 border  border-gray-200 placeholder-gray-100"
													placeholder="Please input product category"
													required
													value={category}
													onChange={(e) => setCategory(e.target.value)}
												/>
											</div>
											<div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
												<label
													className="text-base font-semibold leading-none text-gray-800"
													style={{ color: colors.grey[100] }}
												>
													Image Link
												</label>
												<input
													tabIndex={0}
													arial-label="Please enter link to image"
													type="text"
													className="contact-form__input text-base leading-none text-gray-900 p-3 focus:oultine-none  mt-4 bg-gray-100 border  border-gray-200 placeholder-gray-100"
													placeholder="Please enter link to image"
													required
													value={image}
													onChange={(e) => setImage(e.target.value)}
												/>
											</div>
										</div>
										<div className="md:flex items-center mt-8">
											<div className="md:w-72 flex flex-col">
												<label
													className="text-base font-semibold leading-none text-gray-800"
													style={{ color: colors.grey[100] }}
												>
													Quantity
												</label>
												<input
													tabIndex={0}
													arial-label="Please input quantity"
													type="number"
													className="contact-form__input text-base leading-none text-gray-900 p-3 focus:oultine-none  mt-4 bg-gray-100 border  border-gray-200 placeholder-gray-100 "
													placeholder="Please input quantity"
													required
													value={qty}
													
													onChange={(e) => setQty(e.target.value)}
												/>
											</div>
											<div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
												<label
													className="text-base font-semibold leading-none text-gray-800"
													style={{ color: colors.grey[100] }}
												>
													Price
												</label>
												<input
													tabIndex={0}
													arial-label="Please input price"
													type="number"
													className="contact-form__input text-base leading-none text-gray-900 p-3 focus:oultine-none  mt-4 bg-gray-100 border  border-gray-200 placeholder-gray-100"
													placeholder="Please input price"
													required
													value={price}
													onChange={(e) => setPrice(e.target.value)}
												/>
											</div>
											<div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
												<label
													className="text-base font-semibold leading-none text-gray-800"
													style={{ color: colors.grey[100] }}
												>
													Color
												</label>
												<input
													tabIndex={0}
													arial-label="Please input color"
													type="text"
													className="contact-form__input text-base leading-none text-gray-900 p-3 focus:oultine-none  mt-4 bg-gray-100 border  border-gray-200 placeholder-gray-100"
													placeholder="Please input color"
													required
													value={color}
													onChange={(e) => setColor(e.target.value)}
												/>
											</div>
										</div>
										<div className="md:flex items-center mt-8">
											<div className="md:w-72 flex flex-col">
												<label
													className="text-base font-semibold leading-none text-gray-800"
													style={{ color: colors.grey[100] }}
												>
													Company
												</label>
												<input
													tabIndex={0}
													arial-label="Please input company name"
													type="text"
													className="contact-form__input text-base leading-none text-gray-900 p-3 focus:oultine-none  mt-4 bg-gray-100 border  border-gray-200 placeholder-gray-100 "
													placeholder="Please input company name"
													required
													value={company}
													
													onChange={(e) => setCompany(e.target.value)}
												/>
											</div>
										</div>
										<div>
											<div>
												<div className="w-full flex flex-col mt-8">
													<label
														className="text-base font-semibold leading-none text-gray-800"
														style={{ color: colors.grey[100] }}
													>
														Description
													</label>
													<textarea
														tabIndex={0}
														aria-label="leave a message"
														type="text"
														className="contact-form__textarea h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none  mt-4 bg-gray-100 border  border-gray-200 placeholder-gray-100 resize-none"
														defaultValue={desc}
														placeholder="Please input your message"
														onChange={(e) => setDesc(e.target.value)}
													/>
												</div>
											</div>
										</div>

										<div className="flex items-center justify-center w-full">
											<button className="mt-3 text-base font-semibold leading-none text-white py-4 px-10 bg-red-400  hover:bg-red-500 focus:ring-2 focus:ring-offset-2 focus:ring-red-400 focus:outline-none">
												Add Product
											</button>
										</div>
									</form>
								</div>
							</Box>
						</Box>
					</div>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default AddProducts;
