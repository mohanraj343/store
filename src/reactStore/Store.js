import { configureStore} from "@reduxjs/toolkit";
import FormSlice from "./FormSlice";
import loginSlice from "./loginSlice";
import counterSlice from './Counter';
import SimiliarSlice from "./SimiliarSlice";
import ModalSlice from "./ModalSlice";
import ProductSlice from "./ProductSlice";
import ProductModalSlice from "./ProductModalSlice";
import DuplicateSlice from "./DuplicateSlice";
import CartSlice from "./CartSlice";
import AddressSlice from "./AddressSlice";
import MyorderStatSlice from "../MyorderStatSlice";
import OrderDetailsSlice from "./OrderDetailsSlice";
import heartSlice from "./heartSlice";
import DateSlice from "./DateSlice";
import CustomPrice from "./CustomPrice";


export const store = configureStore({


reducer : {
loginreducer : loginSlice, //  loginslice
formreducer : FormSlice,
couterreducer : counterSlice,
similiarreducer : SimiliarSlice,
modalreducer : ModalSlice,
productreducer : ProductSlice,
productmodalreducer : ProductModalSlice,
duplicatereducer : DuplicateSlice,
cartreducer : CartSlice,
addressreducer : AddressSlice,
myorderstatreducer : MyorderStatSlice,
orderdetailreducer : OrderDetailsSlice,
heartreducer : heartSlice,
datereducer : DateSlice,
custompricereducer : CustomPrice
// more number of slices.....
}

})

