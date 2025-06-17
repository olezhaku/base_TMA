import React, { useEffect } from "react";
import { useAppSelector } from "../shared/hooks/useAppSelector";
import { useAppDispatch } from "../shared/hooks/useAppDispatch";

import { tg } from "../shared/config/config";
import { fetchUser } from "../features/user/fetchUser";

import MyLoader from "../shared/UI/Loader/MyLoader";
import MyButton from "../shared/UI/Button/MyButton";

import "../shared/styles/App.css";

const App = () => {
	const { data, error, isLoading } = useAppSelector(
		(state) => state.userReducer
	);
	const dispatch = useAppDispatch();

	useEffect(() => {
		tg.ready();
	}, []);

	useEffect(() => {
		dispatch(fetchUser());
	}, []);

	const onClose = () => {
		tg.close();
	};

	useEffect(() => {
		console.log("check isLoading -", isLoading);
		console.log("check error -", error);
		console.log("check data -", data);
	}, [data, error, isLoading]);

	return (
		<div className="App">
			{isLoading ? (
				<MyLoader />
			) : (
				<div>
					<MyButton text="X Close" onClick={onClose} />

					<div
						style={{
							display: "flex",
							flexDirection: "column",
							marginTop: "1em",
						}}
					>
						{data &&
							Object.entries(data).map(([key, value]) => (
								<span
									key={key}
									style={{ display: "flex", gap: "1em" }}
								>
									<h3>{key}: </h3> {String(value)}
								</span>
							))}
					</div>
				</div>
			)}
		</div>
	);
};

export default App;
