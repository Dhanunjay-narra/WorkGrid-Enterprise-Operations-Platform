export const FinanceLedgerSummaryGqlTypeDefs = `
  type FinanceLedgerSummary {
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
    getFinanceLedgerSummary(id: ID!): FinanceLedgerSummary
    listFinanceLedgerSummarys(tenantId: String!, limit: Int): [FinanceLedgerSummary!]!
  }

  extend type Mutation {
    createFinanceLedgerSummary(tenantId: String!, code: String!, name: String!): FinanceLedgerSummary!
    deleteFinanceLedgerSummary(id: ID!): Boolean!
  }
`;

export const FinanceLedgerSummaryGqlResolvers = {
  Query: {
    getFinanceLedgerSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceLedgerSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
