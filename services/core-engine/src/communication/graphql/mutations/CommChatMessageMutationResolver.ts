export const CommChatMessageMutationTypeDefs = `
  input CreateCommChatMessageInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createCommChatMessage(input: CreateCommChatMessageInput!): CommChatMessage!
    deleteCommChatMessage(id: ID!): Boolean!
  }
`;

export const CommChatMessageMutationResolvers = {
  Mutation: {
    createCommChatMessage: async (_: any, args: { input: any }) => {
      return {
        id: "com_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteCommChatMessage: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
