export const DocDocumentVersionMutationTypeDefs = `
  input CreateDocDocumentVersionInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createDocDocumentVersion(input: CreateDocDocumentVersionInput!): DocDocumentVersion!
    deleteDocDocumentVersion(id: ID!): Boolean!
  }
`;

export const DocDocumentVersionMutationResolvers = {
  Mutation: {
    createDocDocumentVersion: async (_: any, args: { input: any }) => {
      return {
        id: "doc_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteDocDocumentVersion: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
