export const CommChannelMutationTypeDefs = `
  input CreateCommChannelInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createCommChannel(input: CreateCommChannelInput!): CommChannel!
    deleteCommChannel(id: ID!): Boolean!
  }
`;

export const CommChannelMutationResolvers = {
  Mutation: {
    createCommChannel: async (_: any, args: { input: any }) => {
      return {
        id: "com_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteCommChannel: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
