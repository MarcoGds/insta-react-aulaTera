import React from "react";
import { Avatar } from '../Avatar/';
import { Link } from "react-router-dom";

const placeHolherPhoto = 'https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY='

export default function Post( { avatar, name, photo = placeHolherPhoto, text = "", idUser }) {
    return (
        <article className="post">
            <header className="post__header">
                <div className="user">

                    <Avatar image={avatar} />
                    <Link to={`/user/${idUser}`} className="user__name">{name}</Link>
                </div>

                <button className="post__context">
                    <i className="fas fa-ellipsis-h"></i>
                </button>
            </header>

            <figure className="post__figure">
                <img src={photo} alt="" />
            </figure>

            <p>{text}</p>

            <nav className="post__controls">
                <button className="post__control">
                    <i className="far fa-heart"></i>
                </button>

                <button className="post__control">
                    <i className="far fa-comment"></i>
                </button>

                <button className="post__control">
                    <i className="far fa-bookmark"></i>
                </button>
            </nav>

            <div className="post__status">
                <div className="user">

                    <Avatar image="https://avatarfiles.alphacoders.com/125/thumb-125043.jpg" size="small" />
                    <span>
                        curtido por <a href="/">Domino</a> e outras <a href="/">7 pessoas</a>
                    </span>
                </div>
            </div>
        </article>

    )
}