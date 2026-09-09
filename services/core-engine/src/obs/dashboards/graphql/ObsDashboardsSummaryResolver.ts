export const ObsDashboardsSummaryGqlTypeDefs = `
  type ObsDashboardsSummary {
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
    getObsDashboardsSummary(id: ID!): ObsDashboardsSummary
    listObsDashboardsSummarys(tenantId: String!, limit: Int): [ObsDashboardsSummary!]!
  }

  extend type Mutation {
    createObsDashboardsSummary(tenantId: String!, code: String!, name: String!): ObsDashboardsSummary!
    deleteObsDashboardsSummary(id: ID!): Boolean!
  }
`;

export const ObsDashboardsSummaryGqlResolvers = {
  Query: {
    getObsDashboardsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsDashboardsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
