export const CrmAccountsReportGqlTypeDefs = `
  type CrmAccountsReport {
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
    getCrmAccountsReport(id: ID!): CrmAccountsReport
    listCrmAccountsReports(tenantId: String!, limit: Int): [CrmAccountsReport!]!
  }

  extend type Mutation {
    createCrmAccountsReport(tenantId: String!, code: String!, name: String!): CrmAccountsReport!
    deleteCrmAccountsReport(id: ID!): Boolean!
  }
`;

export const CrmAccountsReportGqlResolvers = {
  Query: {
    getCrmAccountsReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmAccountsReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
