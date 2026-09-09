export const CommThreadsReportGqlTypeDefs = `
  type CommThreadsReport {
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
    getCommThreadsReport(id: ID!): CommThreadsReport
    listCommThreadsReports(tenantId: String!, limit: Int): [CommThreadsReport!]!
  }

  extend type Mutation {
    createCommThreadsReport(tenantId: String!, code: String!, name: String!): CommThreadsReport!
    deleteCommThreadsReport(id: ID!): Boolean!
  }
`;

export const CommThreadsReportGqlResolvers = {
  Query: {
    getCommThreadsReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommThreadsReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
