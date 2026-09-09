export const CommTypingStateMutationTypeDefs = `
  input CreateCommTypingStateInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createCommTypingState(input: CreateCommTypingStateInput!): CommTypingState!
    deleteCommTypingState(id: ID!): Boolean!
  }
`;

export const CommTypingStateMutationResolvers = {
  Mutation: {
    createCommTypingState: async (_: any, args: { input: any }) => {
      return {
        id: "com_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteCommTypingState: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
