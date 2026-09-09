export const FinanceExpensesSessionGqlTypeDefs = `
  type FinanceExpensesSession {
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
    getFinanceExpensesSession(id: ID!): FinanceExpensesSession
    listFinanceExpensesSessions(tenantId: String!, limit: Int): [FinanceExpensesSession!]!
  }

  extend type Mutation {
    createFinanceExpensesSession(tenantId: String!, code: String!, name: String!): FinanceExpensesSession!
    deleteFinanceExpensesSession(id: ID!): Boolean!
  }
`;

export const FinanceExpensesSessionGqlResolvers = {
  Query: {
    getFinanceExpensesSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceExpensesSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
