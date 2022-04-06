import React from "react";
import './Avatar.css';

const placeHolder = 'https://presaveio.s3.amazonaws.com/uploads/NoImage/no_img.png';

const Avatar = ({ image = placeHolder, size, selectable = false }) => {

    const [active, setActive] = React.useState(false);

    function clickControl() {
        if (selectable) {
            setActive(!active)
        }
    }

    return (
        <button
            type="button"
            className={`user__thumb ${active ? "user__thumb--hasNew" : ''}`}
            data-size={size}
            onClick={() => clickControl()}
        >
            <img src={image} alt="" />
        </button>
    )
};

export default Avatar;