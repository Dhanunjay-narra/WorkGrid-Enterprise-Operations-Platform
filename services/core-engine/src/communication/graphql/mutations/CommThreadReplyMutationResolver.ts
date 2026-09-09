export const CommThreadReplyMutationTypeDefs = `
  input CreateCommThreadReplyInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createCommThreadReply(input: CreateCommThreadReplyInput!): CommThreadReply!
    deleteCommThreadReply(id: ID!): Boolean!
  }
`;

export const CommThreadReplyMutationResolvers = {
  Mutation: {
    createCommThreadReply: async (_: any, args: { input: any }) => {
      return {
        id: "com_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteCommThreadReply: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
