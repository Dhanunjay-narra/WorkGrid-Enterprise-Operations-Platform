export const FinanceInvoicesNodeGqlTypeDefs = `
  type FinanceInvoicesNode {
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
    getFinanceInvoicesNode(id: ID!): FinanceInvoicesNode
    listFinanceInvoicesNodes(tenantId: String!, limit: Int): [FinanceInvoicesNode!]!
  }

  extend type Mutation {
    createFinanceInvoicesNode(tenantId: String!, code: String!, name: String!): FinanceInvoicesNode!
    deleteFinanceInvoicesNode(id: ID!): Boolean!
  }
`;

export const FinanceInvoicesNodeGqlResolvers = {
  Query: {
    getFinanceInvoicesNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceInvoicesNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
