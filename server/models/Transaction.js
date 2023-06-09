import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

loadType(mongoose);

const Schema = mongoose.Schema;

const TransactionSchema = new Schema(
  {
    buyer: {
      type: String,
      require: true,
    },
    amount: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    productIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamp: true, toJSON: { getters: true } }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);
export default Transaction;
