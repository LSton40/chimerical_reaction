function Image(props) {
    return (
        <img src={props.image_path} alt={props.placeholder} />
    )
}

export default Image;