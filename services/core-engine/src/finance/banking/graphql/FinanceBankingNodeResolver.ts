export const FinanceBankingNodeGqlTypeDefs = `
  type FinanceBankingNode {
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
    getFinanceBankingNode(id: ID!): FinanceBankingNode
    listFinanceBankingNodes(tenantId: String!, limit: Int): [FinanceBankingNode!]!
  }

  extend type Mutation {
    createFinanceBankingNode(tenantId: String!, code: String!, name: String!): FinanceBankingNode!
    deleteFinanceBankingNode(id: ID!): Boolean!
  }
`;

export const FinanceBankingNodeGqlResolvers = {
  Query: {
    getFinanceBankingNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceBankingNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
