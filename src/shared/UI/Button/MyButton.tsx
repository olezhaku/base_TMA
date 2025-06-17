import React, { FC } from "react";

import classes from "./MyButton.module.css";

interface MyButtonProps {
	text?: string;
	icon?: React.ReactNode;
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;

	className?: string;
	style?: React.CSSProperties;

	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const MyButton: FC<MyButtonProps> = ({
	text,
	icon,
	startIcon,
	endIcon,
	className,
	style,
	onClick,
}) => {
	// startIcon={startIcon}
	// {icon ? icon : <Typography color={textColor}>{value}</Typography>}
	// endIcon={endIcon}

	return (
		<button
			className={`${classes.button} ${className}`}
			style={style}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default MyButton;
