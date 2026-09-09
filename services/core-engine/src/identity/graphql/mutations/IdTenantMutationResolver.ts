export const IdTenantMutationTypeDefs = `
  input CreateIdTenantInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createIdTenant(input: CreateIdTenantInput!): IdTenant!
    deleteIdTenant(id: ID!): Boolean!
  }
`;

export const IdTenantMutationResolvers = {
  Mutation: {
    createIdTenant: async (_: any, args: { input: any }) => {
      return {
        id: "ide_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteIdTenant: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
