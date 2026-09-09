export const AiAgentsBatchGqlTypeDefs = `
  type AiAgentsBatch {
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
    getAiAgentsBatch(id: ID!): AiAgentsBatch
    listAiAgentsBatchs(tenantId: String!, limit: Int): [AiAgentsBatch!]!
  }

  extend type Mutation {
    createAiAgentsBatch(tenantId: String!, code: String!, name: String!): AiAgentsBatch!
    deleteAiAgentsBatch(id: ID!): Boolean!
  }
`;

export const AiAgentsBatchGqlResolvers = {
  Query: {
    getAiAgentsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiAgentsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
