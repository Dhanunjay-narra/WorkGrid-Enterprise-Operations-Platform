export const BiWidgetsThresholdGqlTypeDefs = `
  type BiWidgetsThreshold {
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
    getBiWidgetsThreshold(id: ID!): BiWidgetsThreshold
    listBiWidgetsThresholds(tenantId: String!, limit: Int): [BiWidgetsThreshold!]!
  }

  extend type Mutation {
    createBiWidgetsThreshold(tenantId: String!, code: String!, name: String!): BiWidgetsThreshold!
    deleteBiWidgetsThreshold(id: ID!): Boolean!
  }
`;

export const BiWidgetsThresholdGqlResolvers = {
  Query: {
    getBiWidgetsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiWidgetsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
