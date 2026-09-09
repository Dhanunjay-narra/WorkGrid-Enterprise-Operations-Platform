export const FinanceInvoicesSummaryGqlTypeDefs = `
  type FinanceInvoicesSummary {
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
    getFinanceInvoicesSummary(id: ID!): FinanceInvoicesSummary
    listFinanceInvoicesSummarys(tenantId: String!, limit: Int): [FinanceInvoicesSummary!]!
  }

  extend type Mutation {
    createFinanceInvoicesSummary(tenantId: String!, code: String!, name: String!): FinanceInvoicesSummary!
    deleteFinanceInvoicesSummary(id: ID!): Boolean!
  }
`;

export const FinanceInvoicesSummaryGqlResolvers = {
  Query: {
    getFinanceInvoicesSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceInvoicesSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
