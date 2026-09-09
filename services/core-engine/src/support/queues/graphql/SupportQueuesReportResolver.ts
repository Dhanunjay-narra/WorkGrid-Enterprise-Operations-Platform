export const SupportQueuesReportGqlTypeDefs = `
  type SupportQueuesReport {
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
    getSupportQueuesReport(id: ID!): SupportQueuesReport
    listSupportQueuesReports(tenantId: String!, limit: Int): [SupportQueuesReport!]!
  }

  extend type Mutation {
    createSupportQueuesReport(tenantId: String!, code: String!, name: String!): SupportQueuesReport!
    deleteSupportQueuesReport(id: ID!): Boolean!
  }
`;

export const SupportQueuesReportGqlResolvers = {
  Query: {
    getSupportQueuesReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportQueuesReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
