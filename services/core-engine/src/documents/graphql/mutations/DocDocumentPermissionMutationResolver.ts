export const DocDocumentPermissionMutationTypeDefs = `
  input CreateDocDocumentPermissionInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createDocDocumentPermission(input: CreateDocDocumentPermissionInput!): DocDocumentPermission!
    deleteDocDocumentPermission(id: ID!): Boolean!
  }
`;

export const DocDocumentPermissionMutationResolvers = {
  Mutation: {
    createDocDocumentPermission: async (_: any, args: { input: any }) => {
      return {
        id: "doc_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteDocDocumentPermission: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
