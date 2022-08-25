// import Image from './Image';

function Project(props) {

    return (
        <div class="mha-flash">
            <a href={props.url}>
                <img src={props.image_path} alt={props.placeholder}/>
                <p class="icon-title">{props.title}</p>
            </a>
        </div>
    )
};

export default Project;