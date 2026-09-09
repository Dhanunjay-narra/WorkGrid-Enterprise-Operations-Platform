export const CrmDealsReportGqlTypeDefs = `
  type CrmDealsReport {
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
    getCrmDealsReport(id: ID!): CrmDealsReport
    listCrmDealsReports(tenantId: String!, limit: Int): [CrmDealsReport!]!
  }

  extend type Mutation {
    createCrmDealsReport(tenantId: String!, code: String!, name: String!): CrmDealsReport!
    deleteCrmDealsReport(id: ID!): Boolean!
  }
`;

export const CrmDealsReportGqlResolvers = {
  Query: {
    getCrmDealsReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmDealsReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
