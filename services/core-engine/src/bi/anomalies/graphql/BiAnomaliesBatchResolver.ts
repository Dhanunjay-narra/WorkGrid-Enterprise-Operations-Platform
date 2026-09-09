export const BiAnomaliesBatchGqlTypeDefs = `
  type BiAnomaliesBatch {
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
    getBiAnomaliesBatch(id: ID!): BiAnomaliesBatch
    listBiAnomaliesBatchs(tenantId: String!, limit: Int): [BiAnomaliesBatch!]!
  }

  extend type Mutation {
    createBiAnomaliesBatch(tenantId: String!, code: String!, name: String!): BiAnomaliesBatch!
    deleteBiAnomaliesBatch(id: ID!): Boolean!
  }
`;

export const BiAnomaliesBatchGqlResolvers = {
  Query: {
    getBiAnomaliesBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiAnomaliesBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
