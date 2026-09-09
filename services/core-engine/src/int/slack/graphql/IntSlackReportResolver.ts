export const IntSlackReportGqlTypeDefs = `
  type IntSlackReport {
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
    getIntSlackReport(id: ID!): IntSlackReport
    listIntSlackReports(tenantId: String!, limit: Int): [IntSlackReport!]!
  }

  extend type Mutation {
    createIntSlackReport(tenantId: String!, code: String!, name: String!): IntSlackReport!
    deleteIntSlackReport(id: ID!): Boolean!
  }
`;

export const IntSlackReportGqlResolvers = {
  Query: {
    getIntSlackReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSlackReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
