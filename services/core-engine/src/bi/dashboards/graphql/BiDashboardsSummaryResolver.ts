export const BiDashboardsSummaryGqlTypeDefs = `
  type BiDashboardsSummary {
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
    getBiDashboardsSummary(id: ID!): BiDashboardsSummary
    listBiDashboardsSummarys(tenantId: String!, limit: Int): [BiDashboardsSummary!]!
  }

  extend type Mutation {
    createBiDashboardsSummary(tenantId: String!, code: String!, name: String!): BiDashboardsSummary!
    deleteBiDashboardsSummary(id: ID!): Boolean!
  }
`;

export const BiDashboardsSummaryGqlResolvers = {
  Query: {
    getBiDashboardsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiDashboardsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
