export const IdSsoConfigMutationTypeDefs = `
  input CreateIdSsoConfigInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createIdSsoConfig(input: CreateIdSsoConfigInput!): IdSsoConfig!
    deleteIdSsoConfig(id: ID!): Boolean!
  }
`;

export const IdSsoConfigMutationResolvers = {
  Mutation: {
    createIdSsoConfig: async (_: any, args: { input: any }) => {
      return {
        id: "ide_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteIdSsoConfig: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
