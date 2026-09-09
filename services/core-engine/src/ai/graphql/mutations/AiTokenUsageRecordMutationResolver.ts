export const AiTokenUsageRecordMutationTypeDefs = `
  input CreateAiTokenUsageRecordInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createAiTokenUsageRecord(input: CreateAiTokenUsageRecordInput!): AiTokenUsageRecord!
    deleteAiTokenUsageRecord(id: ID!): Boolean!
  }
`;

export const AiTokenUsageRecordMutationResolvers = {
  Mutation: {
    createAiTokenUsageRecord: async (_: any, args: { input: any }) => {
      return {
        id: "ai_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteAiTokenUsageRecord: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
