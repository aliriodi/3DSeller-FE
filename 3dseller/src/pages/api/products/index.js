// import { dbConect } from '../../../utils/mongoose'
// import Product from '../../../models/Products'
import Product from 'models/Products'
import { dbConect } from 'utils/mongoose'

dbConect()

export default async function handler(req, res) {
  // console.log(req.method, req.url);

  //todo poner try catch a todos no olvidar
  const { method, body } = req
  switch (method) {
    case "GET":
      const product = await Product.find({})
      return res.status(200).json(product)

    case "POST":
      console.log(body);
      const data = await Product.create(body)
      return res.status(201).json(data)


    default:
      return res.status(400).json({
        msg: 'This method is not spported'
      });
  };


}
