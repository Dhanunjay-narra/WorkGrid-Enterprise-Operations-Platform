export const BiAnomaliesThresholdGqlTypeDefs = `
  type BiAnomaliesThreshold {
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
    getBiAnomaliesThreshold(id: ID!): BiAnomaliesThreshold
    listBiAnomaliesThresholds(tenantId: String!, limit: Int): [BiAnomaliesThreshold!]!
  }

  extend type Mutation {
    createBiAnomaliesThreshold(tenantId: String!, code: String!, name: String!): BiAnomaliesThreshold!
    deleteBiAnomaliesThreshold(id: ID!): Boolean!
  }
`;

export const BiAnomaliesThresholdGqlResolvers = {
  Query: {
    getBiAnomaliesThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiAnomaliesThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
