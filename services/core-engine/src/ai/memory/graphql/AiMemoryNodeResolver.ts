export const AiMemoryNodeGqlTypeDefs = `
  type AiMemoryNode {
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
    getAiMemoryNode(id: ID!): AiMemoryNode
    listAiMemoryNodes(tenantId: String!, limit: Int): [AiMemoryNode!]!
  }

  extend type Mutation {
    createAiMemoryNode(tenantId: String!, code: String!, name: String!): AiMemoryNode!
    deleteAiMemoryNode(id: ID!): Boolean!
  }
`;

export const AiMemoryNodeGqlResolvers = {
  Query: {
    getAiMemoryNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiMemoryNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
