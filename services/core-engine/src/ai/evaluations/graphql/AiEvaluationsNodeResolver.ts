export const AiEvaluationsNodeGqlTypeDefs = `
  type AiEvaluationsNode {
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
    getAiEvaluationsNode(id: ID!): AiEvaluationsNode
    listAiEvaluationsNodes(tenantId: String!, limit: Int): [AiEvaluationsNode!]!
  }

  extend type Mutation {
    createAiEvaluationsNode(tenantId: String!, code: String!, name: String!): AiEvaluationsNode!
    deleteAiEvaluationsNode(id: ID!): Boolean!
  }
`;

export const AiEvaluationsNodeGqlResolvers = {
  Query: {
    getAiEvaluationsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiEvaluationsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
