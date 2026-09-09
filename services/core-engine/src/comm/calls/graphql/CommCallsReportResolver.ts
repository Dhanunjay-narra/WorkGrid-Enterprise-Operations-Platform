export const CommCallsReportGqlTypeDefs = `
  type CommCallsReport {
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
    getCommCallsReport(id: ID!): CommCallsReport
    listCommCallsReports(tenantId: String!, limit: Int): [CommCallsReport!]!
  }

  extend type Mutation {
    createCommCallsReport(tenantId: String!, code: String!, name: String!): CommCallsReport!
    deleteCommCallsReport(id: ID!): Boolean!
  }
`;

export const CommCallsReportGqlResolvers = {
  Query: {
    getCommCallsReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommCallsReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
