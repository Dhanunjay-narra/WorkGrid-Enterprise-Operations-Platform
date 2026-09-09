export const FinanceExpensesPolicyGqlTypeDefs = `
  type FinanceExpensesPolicy {
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
    getFinanceExpensesPolicy(id: ID!): FinanceExpensesPolicy
    listFinanceExpensesPolicys(tenantId: String!, limit: Int): [FinanceExpensesPolicy!]!
  }

  extend type Mutation {
    createFinanceExpensesPolicy(tenantId: String!, code: String!, name: String!): FinanceExpensesPolicy!
    deleteFinanceExpensesPolicy(id: ID!): Boolean!
  }
`;

export const FinanceExpensesPolicyGqlResolvers = {
  Query: {
    getFinanceExpensesPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceExpensesPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
