export const FinanceExpensesEventGqlTypeDefs = `
  type FinanceExpensesEvent {
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
    getFinanceExpensesEvent(id: ID!): FinanceExpensesEvent
    listFinanceExpensesEvents(tenantId: String!, limit: Int): [FinanceExpensesEvent!]!
  }

  extend type Mutation {
    createFinanceExpensesEvent(tenantId: String!, code: String!, name: String!): FinanceExpensesEvent!
    deleteFinanceExpensesEvent(id: ID!): Boolean!
  }
`;

export const FinanceExpensesEventGqlResolvers = {
  Query: {
    getFinanceExpensesEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceExpensesEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
