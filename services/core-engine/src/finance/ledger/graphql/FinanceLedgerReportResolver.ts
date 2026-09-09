export const FinanceLedgerReportGqlTypeDefs = `
  type FinanceLedgerReport {
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
    getFinanceLedgerReport(id: ID!): FinanceLedgerReport
    listFinanceLedgerReports(tenantId: String!, limit: Int): [FinanceLedgerReport!]!
  }

  extend type Mutation {
    createFinanceLedgerReport(tenantId: String!, code: String!, name: String!): FinanceLedgerReport!
    deleteFinanceLedgerReport(id: ID!): Boolean!
  }
`;

export const FinanceLedgerReportGqlResolvers = {
  Query: {
    getFinanceLedgerReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceLedgerReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
