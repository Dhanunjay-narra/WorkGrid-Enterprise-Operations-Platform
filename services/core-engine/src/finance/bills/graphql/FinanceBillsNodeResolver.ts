export const FinanceBillsNodeGqlTypeDefs = `
  type FinanceBillsNode {
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
    getFinanceBillsNode(id: ID!): FinanceBillsNode
    listFinanceBillsNodes(tenantId: String!, limit: Int): [FinanceBillsNode!]!
  }

  extend type Mutation {
    createFinanceBillsNode(tenantId: String!, code: String!, name: String!): FinanceBillsNode!
    deleteFinanceBillsNode(id: ID!): Boolean!
  }
`;

export const FinanceBillsNodeGqlResolvers = {
  Query: {
    getFinanceBillsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceBillsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
