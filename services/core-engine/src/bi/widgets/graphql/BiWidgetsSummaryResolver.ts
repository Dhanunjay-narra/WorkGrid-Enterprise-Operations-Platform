export const BiWidgetsSummaryGqlTypeDefs = `
  type BiWidgetsSummary {
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
    getBiWidgetsSummary(id: ID!): BiWidgetsSummary
    listBiWidgetsSummarys(tenantId: String!, limit: Int): [BiWidgetsSummary!]!
  }

  extend type Mutation {
    createBiWidgetsSummary(tenantId: String!, code: String!, name: String!): BiWidgetsSummary!
    deleteBiWidgetsSummary(id: ID!): Boolean!
  }
`;

export const BiWidgetsSummaryGqlResolvers = {
  Query: {
    getBiWidgetsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiWidgetsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
