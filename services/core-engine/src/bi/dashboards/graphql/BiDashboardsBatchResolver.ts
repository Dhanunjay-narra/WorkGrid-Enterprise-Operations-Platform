export const BiDashboardsBatchGqlTypeDefs = `
  type BiDashboardsBatch {
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
    getBiDashboardsBatch(id: ID!): BiDashboardsBatch
    listBiDashboardsBatchs(tenantId: String!, limit: Int): [BiDashboardsBatch!]!
  }

  extend type Mutation {
    createBiDashboardsBatch(tenantId: String!, code: String!, name: String!): BiDashboardsBatch!
    deleteBiDashboardsBatch(id: ID!): Boolean!
  }
`;

export const BiDashboardsBatchGqlResolvers = {
  Query: {
    getBiDashboardsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiDashboardsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
