export const FinanceTaxesReportGqlTypeDefs = `
  type FinanceTaxesReport {
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
    getFinanceTaxesReport(id: ID!): FinanceTaxesReport
    listFinanceTaxesReports(tenantId: String!, limit: Int): [FinanceTaxesReport!]!
  }

  extend type Mutation {
    createFinanceTaxesReport(tenantId: String!, code: String!, name: String!): FinanceTaxesReport!
    deleteFinanceTaxesReport(id: ID!): Boolean!
  }
`;

export const FinanceTaxesReportGqlResolvers = {
  Query: {
    getFinanceTaxesReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTaxesReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
