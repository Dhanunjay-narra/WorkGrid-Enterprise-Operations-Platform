export const IntSyncReportGqlTypeDefs = `
  type IntSyncReport {
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
    getIntSyncReport(id: ID!): IntSyncReport
    listIntSyncReports(tenantId: String!, limit: Int): [IntSyncReport!]!
  }

  extend type Mutation {
    createIntSyncReport(tenantId: String!, code: String!, name: String!): IntSyncReport!
    deleteIntSyncReport(id: ID!): Boolean!
  }
`;

export const IntSyncReportGqlResolvers = {
  Query: {
    getIntSyncReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSyncReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
