export const BiForecastsThresholdGqlTypeDefs = `
  type BiForecastsThreshold {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    version: Int!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    getBiForecastsThreshold(id: ID!): BiForecastsThreshold
    listBiForecastsThresholds(tenantId: String!, limit: Int): [BiForecastsThreshold!]!
  }

  extend type Mutation {
    createBiForecastsThreshold(tenantId: String!, code: String!, name: String!): BiForecastsThreshold!
    deleteBiForecastsThreshold(id: ID!): Boolean!
  }
`;

export const BiForecastsThresholdGqlResolvers = {
  Query: {
    getBiForecastsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiForecastsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
