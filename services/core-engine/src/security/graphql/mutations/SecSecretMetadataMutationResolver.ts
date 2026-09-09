export const SecSecretMetadataMutationTypeDefs = `
  input CreateSecSecretMetadataInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createSecSecretMetadata(input: CreateSecSecretMetadataInput!): SecSecretMetadata!
    deleteSecSecretMetadata(id: ID!): Boolean!
  }
`;

export const SecSecretMetadataMutationResolvers = {
  Mutation: {
    createSecSecretMetadata: async (_: any, args: { input: any }) => {
      return {
        id: "sec_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteSecSecretMetadata: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
