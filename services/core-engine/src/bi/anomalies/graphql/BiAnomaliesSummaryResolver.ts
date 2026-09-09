export const BiAnomaliesSummaryGqlTypeDefs = `
  type BiAnomaliesSummary {
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
    getBiAnomaliesSummary(id: ID!): BiAnomaliesSummary
    listBiAnomaliesSummarys(tenantId: String!, limit: Int): [BiAnomaliesSummary!]!
  }

  extend type Mutation {
    createBiAnomaliesSummary(tenantId: String!, code: String!, name: String!): BiAnomaliesSummary!
    deleteBiAnomaliesSummary(id: ID!): Boolean!
  }
`;

export const BiAnomaliesSummaryGqlResolvers = {
  Query: {
    getBiAnomaliesSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiAnomaliesSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
