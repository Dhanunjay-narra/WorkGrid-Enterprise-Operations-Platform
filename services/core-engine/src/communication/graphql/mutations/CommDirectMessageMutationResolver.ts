export const CommDirectMessageMutationTypeDefs = `
  input CreateCommDirectMessageInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createCommDirectMessage(input: CreateCommDirectMessageInput!): CommDirectMessage!
    deleteCommDirectMessage(id: ID!): Boolean!
  }
`;

export const CommDirectMessageMutationResolvers = {
  Mutation: {
    createCommDirectMessage: async (_: any, args: { input: any }) => {
      return {
        id: "com_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteCommDirectMessage: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
