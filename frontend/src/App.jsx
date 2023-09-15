import { Routes, Route } from "react-router-dom";
import React from "react";

import { Navbar, Footer } from "./components/index";
import { Home, Tasks } from "./pages/index";

const App = () => {
	return (
		<main className="w-full max-w-[2000px] min-h-screen m-auto flex flex-col items-center custom-scrollbar">
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
