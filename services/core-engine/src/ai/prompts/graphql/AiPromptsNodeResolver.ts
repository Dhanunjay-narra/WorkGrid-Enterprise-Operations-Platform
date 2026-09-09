export const AiPromptsNodeGqlTypeDefs = `
  type AiPromptsNode {
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
    getAiPromptsNode(id: ID!): AiPromptsNode
    listAiPromptsNodes(tenantId: String!, limit: Int): [AiPromptsNode!]!
  }

  extend type Mutation {
    createAiPromptsNode(tenantId: String!, code: String!, name: String!): AiPromptsNode!
    deleteAiPromptsNode(id: ID!): Boolean!
  }
`;

export const AiPromptsNodeGqlResolvers = {
  Query: {
    getAiPromptsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiPromptsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
