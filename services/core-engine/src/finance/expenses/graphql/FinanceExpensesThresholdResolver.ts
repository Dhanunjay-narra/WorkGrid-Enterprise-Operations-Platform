export const FinanceExpensesThresholdGqlTypeDefs = `
  type FinanceExpensesThreshold {
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
    getFinanceExpensesThreshold(id: ID!): FinanceExpensesThreshold
    listFinanceExpensesThresholds(tenantId: String!, limit: Int): [FinanceExpensesThreshold!]!
  }

  extend type Mutation {
    createFinanceExpensesThreshold(tenantId: String!, code: String!, name: String!): FinanceExpensesThreshold!
    deleteFinanceExpensesThreshold(id: ID!): Boolean!
  }
`;

export const FinanceExpensesThresholdGqlResolvers = {
  Query: {
    getFinanceExpensesThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceExpensesThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
