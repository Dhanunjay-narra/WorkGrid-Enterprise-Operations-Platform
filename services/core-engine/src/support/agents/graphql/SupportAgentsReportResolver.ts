export const SupportAgentsReportGqlTypeDefs = `
  type SupportAgentsReport {
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
    getSupportAgentsReport(id: ID!): SupportAgentsReport
    listSupportAgentsReports(tenantId: String!, limit: Int): [SupportAgentsReport!]!
  }

  extend type Mutation {
    createSupportAgentsReport(tenantId: String!, code: String!, name: String!): SupportAgentsReport!
    deleteSupportAgentsReport(id: ID!): Boolean!
  }
`;

export const SupportAgentsReportGqlResolvers = {
  Query: {
    getSupportAgentsReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportAgentsReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
