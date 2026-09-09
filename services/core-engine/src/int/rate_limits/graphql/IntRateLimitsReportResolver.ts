export const IntRateLimitsReportGqlTypeDefs = `
  type IntRateLimitsReport {
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
    getIntRateLimitsReport(id: ID!): IntRateLimitsReport
    listIntRateLimitsReports(tenantId: String!, limit: Int): [IntRateLimitsReport!]!
  }

  extend type Mutation {
    createIntRateLimitsReport(tenantId: String!, code: String!, name: String!): IntRateLimitsReport!
    deleteIntRateLimitsReport(id: ID!): Boolean!
  }
`;

export const IntRateLimitsReportGqlResolvers = {
  Query: {
    getIntRateLimitsReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntRateLimitsReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
