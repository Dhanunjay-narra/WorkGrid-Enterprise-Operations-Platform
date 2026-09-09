export const AiAgentMemoryEntryMutationTypeDefs = `
  input CreateAiAgentMemoryEntryInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createAiAgentMemoryEntry(input: CreateAiAgentMemoryEntryInput!): AiAgentMemoryEntry!
    deleteAiAgentMemoryEntry(id: ID!): Boolean!
  }
`;

export const AiAgentMemoryEntryMutationResolvers = {
  Mutation: {
    createAiAgentMemoryEntry: async (_: any, args: { input: any }) => {
      return {
        id: "ai_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteAiAgentMemoryEntry: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
