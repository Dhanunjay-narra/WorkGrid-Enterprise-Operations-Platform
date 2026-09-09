export const CommMentionRecordMutationTypeDefs = `
  input CreateCommMentionRecordInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createCommMentionRecord(input: CreateCommMentionRecordInput!): CommMentionRecord!
    deleteCommMentionRecord(id: ID!): Boolean!
  }
`;

export const CommMentionRecordMutationResolvers = {
  Mutation: {
    createCommMentionRecord: async (_: any, args: { input: any }) => {
      return {
        id: "com_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteCommMentionRecord: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
