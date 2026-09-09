export const SupportSlaNodeGqlTypeDefs = `
  type SupportSlaNode {
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
    getSupportSlaNode(id: ID!): SupportSlaNode
    listSupportSlaNodes(tenantId: String!, limit: Int): [SupportSlaNode!]!
  }

  extend type Mutation {
    createSupportSlaNode(tenantId: String!, code: String!, name: String!): SupportSlaNode!
    deleteSupportSlaNode(id: ID!): Boolean!
  }
`;

export const SupportSlaNodeGqlResolvers = {
  Query: {
    getSupportSlaNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSlaNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
