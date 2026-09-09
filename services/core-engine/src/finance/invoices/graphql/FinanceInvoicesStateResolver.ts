export const FinanceInvoicesStateGqlTypeDefs = `
  type FinanceInvoicesState {
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
    getFinanceInvoicesState(id: ID!): FinanceInvoicesState
    listFinanceInvoicesStates(tenantId: String!, limit: Int): [FinanceInvoicesState!]!
  }

  extend type Mutation {
    createFinanceInvoicesState(tenantId: String!, code: String!, name: String!): FinanceInvoicesState!
    deleteFinanceInvoicesState(id: ID!): Boolean!
  }
`;

export const FinanceInvoicesStateGqlResolvers = {
  Query: {
    getFinanceInvoicesState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceInvoicesState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
