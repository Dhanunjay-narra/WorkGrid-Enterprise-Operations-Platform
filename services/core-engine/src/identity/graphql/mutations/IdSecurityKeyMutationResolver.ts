export const IdSecurityKeyMutationTypeDefs = `
  input CreateIdSecurityKeyInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createIdSecurityKey(input: CreateIdSecurityKeyInput!): IdSecurityKey!
    deleteIdSecurityKey(id: ID!): Boolean!
  }
`;

export const IdSecurityKeyMutationResolvers = {
  Mutation: {
    createIdSecurityKey: async (_: any, args: { input: any }) => {
      return {
        id: "ide_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteIdSecurityKey: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
