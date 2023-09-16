import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import ReactDOM from "react-dom/client";
import React from "react";

import { SignUpModelContextProvider } from "./context/SignUpModelContext.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<SignUpModelContextProvider>
				<ThemeProvider attribute="class">
					<App />
				</ThemeProvider>
			</SignUpModelContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);
