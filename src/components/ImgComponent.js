import React, { Fragment } from 'react'

const ImgComp = ({ src }) => {

    let imgStyles = {
        width: 100+"%",
        height: "auto",
    }

    return (
        <Fragment>
        <img src={src} alt="slide-img" style={imgStyles}></img>
        </Fragment>

    )

}

export default ImgComp;