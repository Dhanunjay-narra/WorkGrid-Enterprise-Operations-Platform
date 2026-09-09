export const CommMessageReactionMutationTypeDefs = `
  input CreateCommMessageReactionInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createCommMessageReaction(input: CreateCommMessageReactionInput!): CommMessageReaction!
    deleteCommMessageReaction(id: ID!): Boolean!
  }
`;

export const CommMessageReactionMutationResolvers = {
  Mutation: {
    createCommMessageReaction: async (_: any, args: { input: any }) => {
      return {
        id: "com_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteCommMessageReaction: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
