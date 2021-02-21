import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    wines: [Wine!]!
  }

  type Wine {
    # id: ID!
    name: String
    year: String
    main_producer: main_producer
    main_country: main_country
    district: district
    volume: volume
    price: price
    litrePrice: litrePrice
    ct: ct
    bbs: Float
    price_adj: Float
    bbs_adj: Float
    availability: availability
    images: [image]
  }

  type ct {
    score: Float
    reviews: Int
  }

  type main_producer {
    name: String
  }
  type main_country {
    name: String
  }
  type district {
    name: String
  }
  type volume {
    value: Float
  }
  type price {
    value: Float
  }
  type litrePrice {
    value: Float
  }
  type availability {
    storeAvailability: storeAvailability
    deliveryAvailability: deliveryAvailability
  }
  type storeAvailability {
    available: Boolean
  }
  type deliveryAvailability {
    available: Boolean
  }
  type image {
    imageType: String
    format: String
    url: String
    altText: String
  }
`;
