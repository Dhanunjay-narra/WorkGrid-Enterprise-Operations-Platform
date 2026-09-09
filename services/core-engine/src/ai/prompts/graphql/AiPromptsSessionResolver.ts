export const AiPromptsSessionGqlTypeDefs = `
  type AiPromptsSession {
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
    getAiPromptsSession(id: ID!): AiPromptsSession
    listAiPromptsSessions(tenantId: String!, limit: Int): [AiPromptsSession!]!
  }

  extend type Mutation {
    createAiPromptsSession(tenantId: String!, code: String!, name: String!): AiPromptsSession!
    deleteAiPromptsSession(id: ID!): Boolean!
  }
`;

export const AiPromptsSessionGqlResolvers = {
  Query: {
    getAiPromptsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiPromptsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
