export const DocDocumentSignatureMutationTypeDefs = `
  input CreateDocDocumentSignatureInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createDocDocumentSignature(input: CreateDocDocumentSignatureInput!): DocDocumentSignature!
    deleteDocDocumentSignature(id: ID!): Boolean!
  }
`;

export const DocDocumentSignatureMutationResolvers = {
  Mutation: {
    createDocDocumentSignature: async (_: any, args: { input: any }) => {
      return {
        id: "doc_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteDocDocumentSignature: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
