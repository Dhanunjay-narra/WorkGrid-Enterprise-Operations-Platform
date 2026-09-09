export const IntWebhooksReportGqlTypeDefs = `
  type IntWebhooksReport {
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
    getIntWebhooksReport(id: ID!): IntWebhooksReport
    listIntWebhooksReports(tenantId: String!, limit: Int): [IntWebhooksReport!]!
  }

  extend type Mutation {
    createIntWebhooksReport(tenantId: String!, code: String!, name: String!): IntWebhooksReport!
    deleteIntWebhooksReport(id: ID!): Boolean!
  }
`;

export const IntWebhooksReportGqlResolvers = {
  Query: {
    getIntWebhooksReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntWebhooksReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
