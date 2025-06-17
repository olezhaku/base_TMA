import React, { FC } from "react";

import classes from "./MyInput.module.css";

interface MyInputProps {
	type?: string;
	value: string | number;
	placeholder?: string;
	icon?: React.ReactNode;
	error?: boolean;

	className?: string;
	style?: React.CSSProperties;

	changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
	keyHandler?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const MyInput: FC<MyInputProps> = ({
	type,
	value,
	placeholder,
	icon,
	error,
	className,
	style,
	changeHandler,
	onClick,
	keyHandler,
}) => {
	return <div>MyInput</div>;
};

export default MyInput;
