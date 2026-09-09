export const AiToolCallRecordMutationTypeDefs = `
  input CreateAiToolCallRecordInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createAiToolCallRecord(input: CreateAiToolCallRecordInput!): AiToolCallRecord!
    deleteAiToolCallRecord(id: ID!): Boolean!
  }
`;

export const AiToolCallRecordMutationResolvers = {
  Mutation: {
    createAiToolCallRecord: async (_: any, args: { input: any }) => {
      return {
        id: "ai_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteAiToolCallRecord: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
