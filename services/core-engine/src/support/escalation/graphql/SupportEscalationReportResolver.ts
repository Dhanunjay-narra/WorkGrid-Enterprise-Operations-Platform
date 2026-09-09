export const SupportEscalationReportGqlTypeDefs = `
  type SupportEscalationReport {
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
    getSupportEscalationReport(id: ID!): SupportEscalationReport
    listSupportEscalationReports(tenantId: String!, limit: Int): [SupportEscalationReport!]!
  }

  extend type Mutation {
    createSupportEscalationReport(tenantId: String!, code: String!, name: String!): SupportEscalationReport!
    deleteSupportEscalationReport(id: ID!): Boolean!
  }
`;

export const SupportEscalationReportGqlResolvers = {
  Query: {
    getSupportEscalationReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportEscalationReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
