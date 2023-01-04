// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors';
import path from 'path';

//import { promises as fs } from 'fs';

 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
/**/

let db =    [
    {
     "id": 1,
     "name": "Alberto Presto Pronta",
     "description": "Figura Impresa 3d 15 cm Ideal como regalo y decoración de oficina/mesa! -Impresa en 3D PLA plástico ecológico -Medidas: 15 cm de altura -Excelente figura con detalles en alta calidad -Consultar por mas colores, medidas y modelos!.",
     "price": 1890,
     "image": "https://http2.mlstatic.com/D_NQ_NP_2X_944492-MLA46557573816_062021-F.webp",
     "stock": 10,
     "tipo" : "Muneco",
     "rating": 4.0,
     "iduser":1,
     "typeo":"admin" 
      },
    {
     "id": 2,
     "name": "Mate de Copa Mundial",
     "description": "En esta oportunidad estamos presentando un mate de Copa del Mundo. Impreso en PLA, pintado y laqueado. Medida Total: 27 DE ALTO POR 11 DE DIAMETRO Mate: 9cm DE ALTO POR 11cm DE DIAMETROInterior de polímero apto para consumo Bombilla de metal.",
     "price": 3000,
     "image": "https://http2.mlstatic.com/D_NQ_NP_2X_957171-MLA52972119431_122022-F.webp",
     "stock": 50,
     "tipo" : "Mate",
     "rating": 4.5,
     "iduser":2,
     "typeo":"admin" 
    },
    {
     "id": 3,
     "name": "Porta celular",
     "description": "Con este portacelular podras cargar tu equipo donde desees y verlo ergonomicamente donde estes.",
     "price": 1320,
     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS45A76MbYWcPgusVsu-CZ9kkVfPeR80ThRFg&usqp=CAU",
     "stock": 5,
     "tipo" : "Accesorio",
     "rating": 4.1,
     "iduser":1,
     "typeo":"client" 
    },
    {
     "id": 4,
     "name": "Vestido Rojo",
     "description": "El vestido utiliza la tecnología textil cinemática de Nervous System, un sistema a través del cual las prendas son impresas en 3D de un material flexible como una sola pieza plegada. Se compone de 1600 piezas. Porque somos una empresa de Tecnologia a satisfacer las necesidades de clientes exigentes.",
     "price": 21000,
     "image": "https://n-e-r-v-o-u-s.com/projects/i.php?/001/040/Petals-Dress-Low-192,medium_large.2x.1456767582.jpg",
     "stock": 8,
     "tipo" : "Ropa",
     "rating": 4.8,
     "iduser":1,
     "typeo":"admin" 
    },
    {
     "id": 5,
     "name": "Vestido Moda Paris",
     "description": "Compuesto por un corpiño-exoesqueleto que está pensado para espantar a los extraños que invadan el espacio personal. Aunque pueda ser una gran idea, el diseño parece propio de una película de ciencia ficción.",
     "price": 22500,
     "image": "https://img.blogs.es/anexom/wp-content/uploads/2017/08/Vestido-arana.jpg",
     "stock": 3,
     "tipo" : "Ropa",
     "rating": 4.9,
     "iduser":3,
     "typeo":"client" 
    },
    {
     "id": 6,
     "name": "Leonel Messi",
     "description": "Figura Impresa 3d 15 cm Ideal como regalo y decoración de tu espacio de trabajo, gano una mundial siendo capitan representando argentina y de los premios del munidal individuales gano el balon de oro (el mejor jugador del mundial) en el Mundial FIFA World Cup Qatar 2022.",
     "price": 8700,
     "image": "https://www.santafecultura.gob.ar/wp-content/uploads/sites/53/2022/05/DesafioMessi-recortada.jpg",
     "stock": 1,
     "tipo" : "Qatar 2022",
     "rating": 5,
     "iduser":2,
     "typeo":"client" 
    },
    {
     "id": 7,
     "name": "Kylian Mbappe",
     "description": "Figura Impresa 3d 15 cm Ideal como regalo y decoración de tu espacio, en el Mundial FIFA World Cup Qatar 2022 Mbappe gano en los premios individuales el botin de oro (el mejor goleador) y quedo en el segundo puesto del Mundial.",
     "price": 4000,
     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIMSw2h03zYUY4NhHb9v7tDvnXJBD1zWHDGSOsl6Adz6QRkmbEsYc_y8SfUCgsF9oC3w&usqp=CAU",
     "stock": 1,
     "tipo" : "Qatar 2022",
     "rating": 3.9,
     "iduser":4,
     "typeo":"client"
    },
    {
     "id": 8,
     "name": "Emiliano Martinez",
     "description": "Figura Impresa 3d 15 cm Ideal como regalo y decoración de tu espacio y gano el Mundial FIFA World Cup Qatar 2022 siendo arquero titular y de los premios individuales del Mundial gano el guante de oro (el mejor arquero).",
     "price": 6000,
     "image": "https://files.cults3d.com/uploaders/19099315/illustration-file/c51898a2-0736-4109-8f49-33ce6ccb22be/1.png",
     "stock": 1,
     "tipo" : "Qatar 2022",
     "rating": 4.7,
     "iduser":1,
     "typeo":"admin" 
    },
    {
     "id": 9,
     "name": "La Copa del Mundo",
     "description": "Figura Impresa 3d 15 cm Ideal como regalo y decoración de tu espacio, la Copa del Mundial FIFA World Cup Qatar que la gano Argentina.",
     "price": 7500,
     "image": "https://http2.mlstatic.com/D_NQ_NP_2X_604489-MLA52432460935_112022-F.webp",
     "stock": 1,
     "tipo" : "Qatar 2022",
     "rating": 5,
     "iduser":1,
     "typeo":"admin" 
    },
    {
     "id": 10,
     "name": "Botin de Oro",
     "description": "Figura Impresa 3d 15 cm Ideal como regalo y decoración de tu espacio, el Botin de Oro del Mundial FIFA World Cup Qatar que lo gano Kylian Mbappe en los premios individuales.",
     "price": 6500,
     "image": "https://files.cults3d.com/uploaders/13345759/illustration-file/943d6de4-5591-4809-9bf7-d7c7715bcbd2/GOLDEN.jpg",
     "stock": 1,
     "tipo" : "Qatar 2022",
     "rating": 4.8,
     "iduser":1,
     "typeo":"admin" 
    },
    {
     "id": 11,
     "name": "Guante de Oro",
     "description": "Figura Impresa 3d 15 cm Ideal como regalo y decoración de tu espacio, el Guante de Oro del Mundial FIFA World Cup Qatar que lo gano Emiliano Martinez en los premios individuales.",
     "price": 6000,
     "image": "data:image/jpeg;base64,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",
     "stock": 1,
     "tipo" : "Qatar 2022",
     "rating": 4.8,
     "iduser":1,
     "typeo":"admin" 
    },
    {
     "id": 12,
     "name": "Balon de Plata",
     "description": "Figura Impresa 3d 15 cm Ideal como regalo y decoración de tu espacio, el Balon de Plata del Mundial FIFA World Cup Qatar que lo gano Enzo Fernandez en los premios individuales.",
     "price": 5500,
     "image": "https://static4.depositphotos.com/1002395/270/i/600/depositphotos_2700331-stock-photo-silver-soccer-ball-trophy-on.jpg",
     "stock": 1,
     "tipo" : "Qatar 2022",
     "rating": 4.8,
     "iduser":1,
     "typeo":"admin" 
    },
    {
     "id": 13,
     "name": "Balon de Oro",
     "description": "Figura Impresa 3d 15 cm Ideal como regalo y decoración de tu espacio, el Balon de Oro del Mundial FIFA World Cup Qatar que lo gano Leonel Messi en los premios individuales.",
     "price": 7300,
     "image": "https://img.planetafobal.com/2022/11/adidas-qatar-2022-premios-individuales-balon-de-oro-fb.jpg",
     "stock": 1,
     "tipo" : "Qatar 2022",
     "rating": 5,
     "iduser":1,
     "typeo":"admin" 
    },
    {
     "id": 14,
     "name": "Trunks Dragon Ball Z",
     "description": "El mejor de Son Goten, mestizo entre humano terricola y Saiyayin hijo de Bulma y Vegeta.",
     "price": 6300,
     "image": "https://files.cults3d.com/uploaders/14056543/illustration-file/1d09412e-dbd3-4db9-8d8e-f6aa0ab298db/trunks02.jpg",
     "stock": 1,
     "tipo" : "Anime",
     "rating": 4.7,
     "iduser":1,
     "typeo":"admin" 
    },
    {
     "id": 15,
     "name": "Goku baby Dragon Ball Z",
     "description": "Goku cuando era bebe, para los fanaticos de Dragon Ball Z que desean tener todo la coleccion este elemento no puede faltar.",
     "price": 7300,
     "image": "https://files.cults3d.com/uploaders/14300305/illustration-file/fd749146-5bcf-43aa-a323-c674c2f44b3d/GB_1.png",
     "stock": 1,
     "tipo" : "Anime",
     "rating": 4.3,
     "iduser":1,
     "typeo":"admin" 
    },
    {
     "id": 16,
     "name": "Vegeta Dragon Ball Z",
     "description": "- Material PLA. - 17 cm de altura. - Figura de exposición sin articulaciones. Pintada a mano y barnizada para lograr una máxima protección de la pintura.",
     "price": 7300,
     "image": "https://http2.mlstatic.com/D_NQ_NP_2X_937339-MLA49170115544_022022-F.webp",
     "stock": 1,
     "tipo" : "Anime",
     "rating": 4.6,
     "iduser":1,
     "typeo":"admin" 
    },
    {
     "id": 16,
     "name": "Vestido fashion unique",
     "description": "Posee 1600 petalos unidos con 2600 bisagras que solo permite el movimiento del cuerpo de forma holgada, la tela resultante no se puede doblar pero la visal y el confort es unico, fresco, versatil para damas que desean marcar la diferencia en cualquier evento.",
     "price": 7300,
     "image": "https://www.digitaltrends.com/wp-content/uploads/2016/03/Nervous-System-Kinematic-Petals-Dress_001.jpg?p=1&fit=700%2C467",
     "stock": 1,
     "tipo" : "Ropa",
     "rating": 4.8,
     "iduser":1,
     "typeo":"admin" 
    }
   ]/**/
    


  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });
  //Find the absolute path of the json directory
// const jsonDirectory = path.join(process.cwd(), 'data');
   //Read the json data file data.json
 //  const fileContents = await fs.readFile(jsonDirectory + '../db.json', 'utf8');
 //   res.status(200).json(JSON.parse(fileContents));
 console.log(db)
 res.status(200).json({ message: 'Hello from Next.js!' });
}
