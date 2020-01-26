import models from '../models';
import { errResponse, successResponse } from '../utils/util';
const { Product } = models;

const addProduct = async (req, res) => {
  try {
    const { ...props } = req.body;
    const product = await Product.create(props);
    const id  = product.getId();
    return successResponse(res, 201, id);
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

export default addProduct;
