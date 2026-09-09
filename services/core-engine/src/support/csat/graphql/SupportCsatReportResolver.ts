export const SupportCsatReportGqlTypeDefs = `
  type SupportCsatReport {
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
    getSupportCsatReport(id: ID!): SupportCsatReport
    listSupportCsatReports(tenantId: String!, limit: Int): [SupportCsatReport!]!
  }

  extend type Mutation {
    createSupportCsatReport(tenantId: String!, code: String!, name: String!): SupportCsatReport!
    deleteSupportCsatReport(id: ID!): Boolean!
  }
`;

export const SupportCsatReportGqlResolvers = {
  Query: {
    getSupportCsatReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportCsatReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
