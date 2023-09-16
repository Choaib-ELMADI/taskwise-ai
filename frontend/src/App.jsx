import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { SignUpModelContext } from "./context/SignUpModelContext";
import { Navbar, Footer, SignUpModel } from "./components/index";
import { Home, Tasks } from "./pages/index";

const App = () => {
	const { isModelOpen } = useContext(SignUpModelContext);

	useEffect(() => {
		if (isModelOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isModelOpen]);

	return (
		<main className="w-full max-w-[2000px] min-h-screen m-auto flex flex-col items-center relative">
			{isModelOpen && <SignUpModel />}
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/tasks" element={<Tasks />} />
			</Routes>
			<Footer />
		</main>
	);
};

export default App;
