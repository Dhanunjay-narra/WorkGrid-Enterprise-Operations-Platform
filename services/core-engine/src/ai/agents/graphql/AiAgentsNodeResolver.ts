export const AiAgentsNodeGqlTypeDefs = `
  type AiAgentsNode {
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
    getAiAgentsNode(id: ID!): AiAgentsNode
    listAiAgentsNodes(tenantId: String!, limit: Int): [AiAgentsNode!]!
  }

  extend type Mutation {
    createAiAgentsNode(tenantId: String!, code: String!, name: String!): AiAgentsNode!
    deleteAiAgentsNode(id: ID!): Boolean!
  }
`;

export const AiAgentsNodeGqlResolvers = {
  Query: {
    getAiAgentsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiAgentsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
