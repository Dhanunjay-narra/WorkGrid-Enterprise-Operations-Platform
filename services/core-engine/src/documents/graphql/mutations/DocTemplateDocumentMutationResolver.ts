export const DocTemplateDocumentMutationTypeDefs = `
  input CreateDocTemplateDocumentInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createDocTemplateDocument(input: CreateDocTemplateDocumentInput!): DocTemplateDocument!
    deleteDocTemplateDocument(id: ID!): Boolean!
  }
`;

export const DocTemplateDocumentMutationResolvers = {
  Mutation: {
    createDocTemplateDocument: async (_: any, args: { input: any }) => {
      return {
        id: "doc_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteDocTemplateDocument: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
