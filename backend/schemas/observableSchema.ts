import mongoose from 'mongoose';
import { Schema } from 'mongoose';

export interface IObserverSchema extends Document {
  name: string;
  type: string;
  config: undefined;
}

const ObserverSchema: Schema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  config: { type: Schema.Types.Mixed },
});


export const ObserverModel = mongoose.models.observer || mongoose.model("observer", ObserverSchema);
