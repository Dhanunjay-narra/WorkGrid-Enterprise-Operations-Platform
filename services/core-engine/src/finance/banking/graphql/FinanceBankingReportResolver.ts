export const FinanceBankingReportGqlTypeDefs = `
  type FinanceBankingReport {
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
    getFinanceBankingReport(id: ID!): FinanceBankingReport
    listFinanceBankingReports(tenantId: String!, limit: Int): [FinanceBankingReport!]!
  }

  extend type Mutation {
    createFinanceBankingReport(tenantId: String!, code: String!, name: String!): FinanceBankingReport!
    deleteFinanceBankingReport(id: ID!): Boolean!
  }
`;

export const FinanceBankingReportGqlResolvers = {
  Query: {
    getFinanceBankingReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceBankingReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
