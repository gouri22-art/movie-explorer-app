import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import MovieDetails from "./pages/MovieDetails";
import AddMovie from "./pages/AddMovie";
import EditMovie from "./pages/EditMovie";
import MovieScroller from "./pages/MovieScroller";
import Books from "./pages/Books";

const App = () => {
	return (
		<div>
			{/* Navbar */}
			<Navbar />
			{/* <h1>React Movie Explorer</h1> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/movies"
					element={
						<PrivateRoute>
							<Movies />
						</PrivateRoute>
					}
				/>
				{/* <Route
					path="/movies"
					element={
						<PrivateRoute>
							<MovieScroller />
						</PrivateRoute>
					}
				/> */}

				<Route
					path="/movies/:id"
					element={
						<PrivateRoute>
							<MovieDetails />
						</PrivateRoute>
					}
				/>
				<Route
					path="/add-movie"
					element={
						<PrivateRoute>
							<AddMovie />
						</PrivateRoute>
					}
				/>
				<Route
					path="/edit-movie/:id"
					element={
						<PrivateRoute>
							<EditMovie />
						</PrivateRoute>
					}
				/>
				<Route path="/books" element={<Books />} />
				<Route path="/login" element={<Login />} />
			</Routes>
			{/* all routes go inside */}
			{/* Footer */}
			{/* <Footer/> */}
		</div>
	);
};

export default App;