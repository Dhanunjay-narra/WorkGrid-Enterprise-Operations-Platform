export const FinanceExpensesReportGqlTypeDefs = `
  type FinanceExpensesReport {
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
    getFinanceExpensesReport(id: ID!): FinanceExpensesReport
    listFinanceExpensesReports(tenantId: String!, limit: Int): [FinanceExpensesReport!]!
  }

  extend type Mutation {
    createFinanceExpensesReport(tenantId: String!, code: String!, name: String!): FinanceExpensesReport!
    deleteFinanceExpensesReport(id: ID!): Boolean!
  }
`;

export const FinanceExpensesReportGqlResolvers = {
  Query: {
    getFinanceExpensesReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceExpensesReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
