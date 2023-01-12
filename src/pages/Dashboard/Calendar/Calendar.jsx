import "./Calendar.scss";
//context
import { ColorModeContext, useMode } from "../../../context/dashboardTheme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { tokens } from "../../../context/dashboardTheme";

//components
import Topbar from "../../../components/Topbar/Topbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Header from "../../../components/Header/Header";

//react
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
//axios

//calender
import FullCalendar, { formDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

//mui
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

import { color } from "@mui/system";
import { formatDate } from "@fullcalendar/core";

const Calendar = () => {
	// const theme = useTheme();
	const [theme, colorMode] = useMode();
	const colors = tokens(theme.palette.mode);
	const [currentEvents, setCurrentEvents] = useState([]);
	const [modalOpen, setModalOpen] = useState(false);

	//handle date click

	const handleDateClick = (selected) => {
		const myTitle = prompt("Enter task");
		const title = myTitle;
		const calendarApi = selected.view.calendar;
		calendarApi.unselect();

		if (title) {
			calendarApi.addEvent({
				id: uuidv4(),
				title,
				start: selected.startStr,
				end: selected.endStr,
				allDay: selected.allDay,
			});
		}
		setModalOpen(false);
	};

	const handleEventClick = () => {};


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

						<Box m="1.25rem">
							<Header
								title="Calendar"
								subtitle={"Save all your important tasks here"}
							></Header>
							<Box display={"flex"} justifyContent="space-between">
								{/* calendar events */}
								<Box
									flex="1 1 20%"
									backgroundColor={colors.sitePrimary[400]}
									p="1rem"
									mt={"5rem"}
									borderRadius={".25rem"}
								>
									<Typography variant="h5">Events</Typography>
									<List>
										{currentEvents &&
											currentEvents.map((event) => {
												return (
													<ListItem
														key={event.id}
														sx={{
															backgroundColor: colors.sitePrimary[700],
															margin: ".625rem 0",
															borderRadius: "2px",
														}}
													>
														<ListItemText
															sx={{
																color: "#fcfcfc",
															}}
															primary={event.title}
															secondary={
																<Typography sx={{ fontSize: ".75rem" }}>
																	{formatDate(event.start)}
																</Typography>
															}
														></ListItemText>
													</ListItem>
												);
											})}
									</List>
								</Box>

								{/* calendar     */}
								<Box flex="1 1 100%" ml="1rem">
									<FullCalendar
										height={"75vh"}
										plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
										headerToolbar={{
											left: "prev,next,today",
											center: "title",
											right: "dayGridMonth,timeGridWeek,timeGridDay",
										}}
										initialView="dayGridMonth"
										editable={true}
										selectable={true}
										selectMirror={true}
										dayMaxEvents={true}
										select={handleDateClick}
										eventClick={handleEventClick}
										eventsSet={(events) => {
											setCurrentEvents(events);
										}}
									/>
								</Box>
							</Box>
						</Box>
					</div>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default Calendar;
