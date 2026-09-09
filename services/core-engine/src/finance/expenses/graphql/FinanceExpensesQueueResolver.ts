export const FinanceExpensesQueueGqlTypeDefs = `
  type FinanceExpensesQueue {
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
    getFinanceExpensesQueue(id: ID!): FinanceExpensesQueue
    listFinanceExpensesQueues(tenantId: String!, limit: Int): [FinanceExpensesQueue!]!
  }

  extend type Mutation {
    createFinanceExpensesQueue(tenantId: String!, code: String!, name: String!): FinanceExpensesQueue!
    deleteFinanceExpensesQueue(id: ID!): Boolean!
  }
`;

export const FinanceExpensesQueueGqlResolvers = {
  Query: {
    getFinanceExpensesQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceExpensesQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
