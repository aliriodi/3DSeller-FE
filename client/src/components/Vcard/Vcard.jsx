import React  from 'react'

export default function Vcard(props) {
  return (
    <div className="card">
       <h4 /*className="flex-items"*/>{props.name}</h4>
       {props.image?<a href={`/videogames/${props.id}`}>
      <img  className={props.id==1?'imageVcardAlberto':"imageVcard"} src={props.image}  alt="centered image"/>  </a>:null}
       
    {/* <h5><strong>{props.image?'Generos':null }</strong> </h5> */}
    {/* <p className="genres">{props.genres.map((object) => ' '+object.name).toString()  }</p> */}
    <p></p>
    </div>
  )
}