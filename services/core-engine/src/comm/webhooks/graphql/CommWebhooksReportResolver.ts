export const CommWebhooksReportGqlTypeDefs = `
  type CommWebhooksReport {
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
    getCommWebhooksReport(id: ID!): CommWebhooksReport
    listCommWebhooksReports(tenantId: String!, limit: Int): [CommWebhooksReport!]!
  }

  extend type Mutation {
    createCommWebhooksReport(tenantId: String!, code: String!, name: String!): CommWebhooksReport!
    deleteCommWebhooksReport(id: ID!): Boolean!
  }
`;

export const CommWebhooksReportGqlResolvers = {
  Query: {
    getCommWebhooksReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommWebhooksReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
