import { Routes, Route, Navigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";

import { SignUpModelContext } from "./context/SignUpModelContext";
import { Navbar, Footer, SignUpModel } from "./components/index";
import { useAuthContext } from "./hooks/useAuthContext";
import { Home, Tasks } from "./pages/index";

const App = () => {
	const { isModelOpen } = useContext(SignUpModelContext);
	const { user } = useAuthContext();

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
				<Route path="/" element={!user ? <Home /> : <Navigate to="/tasks" />} />
				<Route path="/tasks" element={user ? <Tasks /> : <Navigate to="/" />} />
			</Routes>
			<Footer />
		</main>
	);
};

export default App;
