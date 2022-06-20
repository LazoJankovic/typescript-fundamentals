export interface Product {
  id: number;
  name: string;
  icon: string;
  description?: string;
  validate(): boolean; //products.json don't have functions and it doesn't show errors 
                      // probably because it wotrks because of the changes later in course 
}

// Examples of using a type alias
type ProductAlias =
  | string
  | number
  | {
      id: number;
      name: string;
      icon: string;
      description?: string;
    };

/* let boboSmrad: Product = {
  Type '{}' is missing the following properties from type 'Product': id, name, icon, validate
}*/
let product: ProductAlias = 'Food';

// Using a type alias versus an enum
enum ProductType {
  Sporting,
  Home,
}
let pt: ProductType = ProductType.Sporting
console.log('Product Type: ', pt);

type ProductTypeList = 'SPORTING' | 'HOME';
let p: ProductTypeList = 'SPORTING'; // or ProductType.Sporting
