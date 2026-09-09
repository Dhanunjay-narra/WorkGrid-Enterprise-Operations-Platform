export const CrmLeadsReportGqlTypeDefs = `
  type CrmLeadsReport {
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
    getCrmLeadsReport(id: ID!): CrmLeadsReport
    listCrmLeadsReports(tenantId: String!, limit: Int): [CrmLeadsReport!]!
  }

  extend type Mutation {
    createCrmLeadsReport(tenantId: String!, code: String!, name: String!): CrmLeadsReport!
    deleteCrmLeadsReport(id: ID!): Boolean!
  }
`;

export const CrmLeadsReportGqlResolvers = {
  Query: {
    getCrmLeadsReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmLeadsReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
