export const IdPasskeyCredentialMutationTypeDefs = `
  input CreateIdPasskeyCredentialInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createIdPasskeyCredential(input: CreateIdPasskeyCredentialInput!): IdPasskeyCredential!
    deleteIdPasskeyCredential(id: ID!): Boolean!
  }
`;

export const IdPasskeyCredentialMutationResolvers = {
  Mutation: {
    createIdPasskeyCredential: async (_: any, args: { input: any }) => {
      return {
        id: "ide_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteIdPasskeyCredential: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
