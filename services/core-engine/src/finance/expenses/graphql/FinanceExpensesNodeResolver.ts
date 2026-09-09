export const FinanceExpensesNodeGqlTypeDefs = `
  type FinanceExpensesNode {
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
    getFinanceExpensesNode(id: ID!): FinanceExpensesNode
    listFinanceExpensesNodes(tenantId: String!, limit: Int): [FinanceExpensesNode!]!
  }

  extend type Mutation {
    createFinanceExpensesNode(tenantId: String!, code: String!, name: String!): FinanceExpensesNode!
    deleteFinanceExpensesNode(id: ID!): Boolean!
  }
`;

export const FinanceExpensesNodeGqlResolvers = {
  Query: {
    getFinanceExpensesNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceExpensesNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
