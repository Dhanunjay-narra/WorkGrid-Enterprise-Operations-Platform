export const FinanceExpensesStateGqlTypeDefs = `
  type FinanceExpensesState {
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
    getFinanceExpensesState(id: ID!): FinanceExpensesState
    listFinanceExpensesStates(tenantId: String!, limit: Int): [FinanceExpensesState!]!
  }

  extend type Mutation {
    createFinanceExpensesState(tenantId: String!, code: String!, name: String!): FinanceExpensesState!
    deleteFinanceExpensesState(id: ID!): Boolean!
  }
`;

export const FinanceExpensesStateGqlResolvers = {
  Query: {
    getFinanceExpensesState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceExpensesState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
