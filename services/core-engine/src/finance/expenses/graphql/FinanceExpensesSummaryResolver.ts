export const FinanceExpensesSummaryGqlTypeDefs = `
  type FinanceExpensesSummary {
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
    getFinanceExpensesSummary(id: ID!): FinanceExpensesSummary
    listFinanceExpensesSummarys(tenantId: String!, limit: Int): [FinanceExpensesSummary!]!
  }

  extend type Mutation {
    createFinanceExpensesSummary(tenantId: String!, code: String!, name: String!): FinanceExpensesSummary!
    deleteFinanceExpensesSummary(id: ID!): Boolean!
  }
`;

export const FinanceExpensesSummaryGqlResolvers = {
  Query: {
    getFinanceExpensesSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceExpensesSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
