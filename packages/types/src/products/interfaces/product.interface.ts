import { CreateProductRequest } from "../dtos/create-product.dto";

export interface Product extends CreateProductRequest {
  id: string;
}
