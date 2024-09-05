import React from "react";

const CustomButton = ({
    disabled = false,
    type = "link",
    children,
    linkTo,
    action,
    value,
}) => {
    const disabledClass =
        " pointer-events-none !bg-gray-400 !hover:bg-gray-400 !cursor-not-allowed ";

    let selectedClassName =
        " text-white bg-gray-800 hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ";
    switch (type) {
        case "header":
            selectedClassName =
                " block py-2 px-4 font-semibold text-gray-700 hover:bg-gray-700 hover:rounded-md hover:text-white ";
            break;
        case "disclaimers":
            selectedClassName = " text-xs text-gray-400 hover:border-b ";
            break;
        case "icons":
            selectedClassName =
                "text-gray-400 rounded-full border border-gray-400 py-1 px-3 ";
            break;
        default:
            break;
    }

    if (type === "submit") {
        return (
            <input
                className={`${selectedClassName} ${disabled ? disabledClass : ""} `}
                type="submit"
            />
        );
    } else if (type === "action") {
        return (
            <button
                className={`${selectedClassName} ${disabled ? disabledClass : ""} `}
                onClick={action}
                value={value}>
                {children}
            </button>
        );
    } else {
        return (
            <a
                href={linkTo}
                className={`${selectedClassName} ${disabled ? disabledClass : ""} `}>
                {children}
            </a>
        );
    }
};

export default CustomButton;
