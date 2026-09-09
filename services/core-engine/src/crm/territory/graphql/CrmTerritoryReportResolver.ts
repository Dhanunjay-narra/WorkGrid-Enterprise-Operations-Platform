export const CrmTerritoryReportGqlTypeDefs = `
  type CrmTerritoryReport {
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
    getCrmTerritoryReport(id: ID!): CrmTerritoryReport
    listCrmTerritoryReports(tenantId: String!, limit: Int): [CrmTerritoryReport!]!
  }

  extend type Mutation {
    createCrmTerritoryReport(tenantId: String!, code: String!, name: String!): CrmTerritoryReport!
    deleteCrmTerritoryReport(id: ID!): Boolean!
  }
`;

export const CrmTerritoryReportGqlResolvers = {
  Query: {
    getCrmTerritoryReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmTerritoryReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
