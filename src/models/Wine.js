import mongoose from 'mongoose';

const wineSchema = new mongoose.Schema(
  {
    name: String,
    year: String,
    ct: {
      score: String,
      reviews: String
    }
  },
  { collection: 'vinmonopolet' }
);

export const Wine = mongoose.model('Wine', wineSchema);
