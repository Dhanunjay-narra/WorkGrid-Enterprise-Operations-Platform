export const AiRagNodeGqlTypeDefs = `
  type AiRagNode {
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
    getAiRagNode(id: ID!): AiRagNode
    listAiRagNodes(tenantId: String!, limit: Int): [AiRagNode!]!
  }

  extend type Mutation {
    createAiRagNode(tenantId: String!, code: String!, name: String!): AiRagNode!
    deleteAiRagNode(id: ID!): Boolean!
  }
`;

export const AiRagNodeGqlResolvers = {
  Query: {
    getAiRagNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiRagNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
