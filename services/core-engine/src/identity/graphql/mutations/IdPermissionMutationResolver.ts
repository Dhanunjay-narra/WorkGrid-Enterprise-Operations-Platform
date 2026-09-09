export const IdPermissionMutationTypeDefs = `
  input CreateIdPermissionInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createIdPermission(input: CreateIdPermissionInput!): IdPermission!
    deleteIdPermission(id: ID!): Boolean!
  }
`;

export const IdPermissionMutationResolvers = {
  Mutation: {
    createIdPermission: async (_: any, args: { input: any }) => {
      return {
        id: "ide_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteIdPermission: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
