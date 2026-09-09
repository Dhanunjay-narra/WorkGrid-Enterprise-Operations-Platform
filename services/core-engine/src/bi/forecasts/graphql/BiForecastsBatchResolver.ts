export const BiForecastsBatchGqlTypeDefs = `
  type BiForecastsBatch {
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
    getBiForecastsBatch(id: ID!): BiForecastsBatch
    listBiForecastsBatchs(tenantId: String!, limit: Int): [BiForecastsBatch!]!
  }

  extend type Mutation {
    createBiForecastsBatch(tenantId: String!, code: String!, name: String!): BiForecastsBatch!
    deleteBiForecastsBatch(id: ID!): Boolean!
  }
`;

export const BiForecastsBatchGqlResolvers = {
  Query: {
    getBiForecastsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiForecastsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
