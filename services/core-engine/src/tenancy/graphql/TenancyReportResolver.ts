export const TenancyReportGqlTypeDefs = `
  type TenancyReport {
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
    getTenancyReport(id: ID!): TenancyReport
    listTenancyReports(tenantId: String!, limit: Int): [TenancyReport!]!
  }

  extend type Mutation {
    createTenancyReport(tenantId: String!, code: String!, name: String!): TenancyReport!
    deleteTenancyReport(id: ID!): Boolean!
  }
`;

export const TenancyReportGqlResolvers = {
  Query: {
    getTenancyReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "TenancyReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
