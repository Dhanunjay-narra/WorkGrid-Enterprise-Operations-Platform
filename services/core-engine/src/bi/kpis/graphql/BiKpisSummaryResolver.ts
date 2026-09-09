export const BiKpisSummaryGqlTypeDefs = `
  type BiKpisSummary {
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
    getBiKpisSummary(id: ID!): BiKpisSummary
    listBiKpisSummarys(tenantId: String!, limit: Int): [BiKpisSummary!]!
  }

  extend type Mutation {
    createBiKpisSummary(tenantId: String!, code: String!, name: String!): BiKpisSummary!
    deleteBiKpisSummary(id: ID!): Boolean!
  }
`;

export const BiKpisSummaryGqlResolvers = {
  Query: {
    getBiKpisSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiKpisSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
