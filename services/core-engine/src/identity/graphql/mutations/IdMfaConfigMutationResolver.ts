export const IdMfaConfigMutationTypeDefs = `
  input CreateIdMfaConfigInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createIdMfaConfig(input: CreateIdMfaConfigInput!): IdMfaConfig!
    deleteIdMfaConfig(id: ID!): Boolean!
  }
`;

export const IdMfaConfigMutationResolvers = {
  Mutation: {
    createIdMfaConfig: async (_: any, args: { input: any }) => {
      return {
        id: "ide_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteIdMfaConfig: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
