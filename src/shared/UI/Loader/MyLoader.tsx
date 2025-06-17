import React, { FC } from "react";

import classes from "./MyLoader.module.css";

interface MyLoaderProps {
	className?: string;
	style?: React.CSSProperties;
}

const MyLoader: FC<MyLoaderProps> = ({ className, style }) => {
	return <h1>Loading...</h1>;
};

export default MyLoader;
