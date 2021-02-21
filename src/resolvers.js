import { Wine } from './models/Wine';

export const resolvers = {
  Query: {
    wines: () =>
      Wine.aggregate([
        {
          $match: {
            'main_category.code': 'rødvin',
            'ct.reviews': { $gt: 1 },
            'ct.score': { $gt: 0 }
          }
        },
        {
          $addFields: {
            bbs: {
              $round: [{ $divide: ['$ct.score', '$litrePrice.value'] }, 4]
            },
            price_adj: {
              $round: [{ $multiply: ['$litrePrice.value', 0.75] }, 2]
            }
          }
        },
        {
          $addFields: {
            bbs_adj: { $round: [{ $multiply: ['$bbs', '$volume.value'] }, 4] }
          }
        }
      ])
  }
};
