export const BiCohortsThresholdGqlTypeDefs = `
  type BiCohortsThreshold {
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
    getBiCohortsThreshold(id: ID!): BiCohortsThreshold
    listBiCohortsThresholds(tenantId: String!, limit: Int): [BiCohortsThreshold!]!
  }

  extend type Mutation {
    createBiCohortsThreshold(tenantId: String!, code: String!, name: String!): BiCohortsThreshold!
    deleteBiCohortsThreshold(id: ID!): Boolean!
  }
`;

export const BiCohortsThresholdGqlResolvers = {
  Query: {
    getBiCohortsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiCohortsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
