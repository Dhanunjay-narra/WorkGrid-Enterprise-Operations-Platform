export const FinanceExpensesBatchGqlTypeDefs = `
  type FinanceExpensesBatch {
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
    getFinanceExpensesBatch(id: ID!): FinanceExpensesBatch
    listFinanceExpensesBatchs(tenantId: String!, limit: Int): [FinanceExpensesBatch!]!
  }

  extend type Mutation {
    createFinanceExpensesBatch(tenantId: String!, code: String!, name: String!): FinanceExpensesBatch!
    deleteFinanceExpensesBatch(id: ID!): Boolean!
  }
`;

export const FinanceExpensesBatchGqlResolvers = {
  Query: {
    getFinanceExpensesBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceExpensesBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
