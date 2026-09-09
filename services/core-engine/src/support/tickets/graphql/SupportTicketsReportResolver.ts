export const SupportTicketsReportGqlTypeDefs = `
  type SupportTicketsReport {
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
    getSupportTicketsReport(id: ID!): SupportTicketsReport
    listSupportTicketsReports(tenantId: String!, limit: Int): [SupportTicketsReport!]!
  }

  extend type Mutation {
    createSupportTicketsReport(tenantId: String!, code: String!, name: String!): SupportTicketsReport!
    deleteSupportTicketsReport(id: ID!): Boolean!
  }
`;

export const SupportTicketsReportGqlResolvers = {
  Query: {
    getSupportTicketsReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportTicketsReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
