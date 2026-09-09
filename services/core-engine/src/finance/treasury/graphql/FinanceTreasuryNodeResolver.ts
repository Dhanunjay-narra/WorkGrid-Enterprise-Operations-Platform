export const FinanceTreasuryNodeGqlTypeDefs = `
  type FinanceTreasuryNode {
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
    getFinanceTreasuryNode(id: ID!): FinanceTreasuryNode
    listFinanceTreasuryNodes(tenantId: String!, limit: Int): [FinanceTreasuryNode!]!
  }

  extend type Mutation {
    createFinanceTreasuryNode(tenantId: String!, code: String!, name: String!): FinanceTreasuryNode!
    deleteFinanceTreasuryNode(id: ID!): Boolean!
  }
`;

export const FinanceTreasuryNodeGqlResolvers = {
  Query: {
    getFinanceTreasuryNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTreasuryNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
