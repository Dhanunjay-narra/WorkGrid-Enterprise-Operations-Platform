export const BiQueriesThresholdGqlTypeDefs = `
  type BiQueriesThreshold {
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
    getBiQueriesThreshold(id: ID!): BiQueriesThreshold
    listBiQueriesThresholds(tenantId: String!, limit: Int): [BiQueriesThreshold!]!
  }

  extend type Mutation {
    createBiQueriesThreshold(tenantId: String!, code: String!, name: String!): BiQueriesThreshold!
    deleteBiQueriesThreshold(id: ID!): Boolean!
  }
`;

export const BiQueriesThresholdGqlResolvers = {
  Query: {
    getBiQueriesThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiQueriesThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
