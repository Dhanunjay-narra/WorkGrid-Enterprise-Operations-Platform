export const FinanceExpensesPayloadGqlTypeDefs = `
  type FinanceExpensesPayload {
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
    getFinanceExpensesPayload(id: ID!): FinanceExpensesPayload
    listFinanceExpensesPayloads(tenantId: String!, limit: Int): [FinanceExpensesPayload!]!
  }

  extend type Mutation {
    createFinanceExpensesPayload(tenantId: String!, code: String!, name: String!): FinanceExpensesPayload!
    deleteFinanceExpensesPayload(id: ID!): Boolean!
  }
`;

export const FinanceExpensesPayloadGqlResolvers = {
  Query: {
    getFinanceExpensesPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceExpensesPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
