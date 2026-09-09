export const CommUserPresenceMutationTypeDefs = `
  input CreateCommUserPresenceInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createCommUserPresence(input: CreateCommUserPresenceInput!): CommUserPresence!
    deleteCommUserPresence(id: ID!): Boolean!
  }
`;

export const CommUserPresenceMutationResolvers = {
  Mutation: {
    createCommUserPresence: async (_: any, args: { input: any }) => {
      return {
        id: "com_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteCommUserPresence: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
