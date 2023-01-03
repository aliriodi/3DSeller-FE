import React  from 'react'

export default function Vcard(props) {
  return (
    <div className="card">
       <h4 className="cardTitle">{props.name}</h4>
       {props.image?<a href={`/productos/${props.id}`}>
      <img  className={props.id===1||props.id===9?'imageVcardAlberto':"imageVcard"} src={props.image}  alt=""/>  </a>:null}
      
    {/* <h5><strong>{props.image?'Generos':null }</strong> </h5> */}
    {/* <p className="genres">{props.genres.map((object) => ' '+object.name).toString()  }</p> */}
    <p></p>
    </div>
  )
}
