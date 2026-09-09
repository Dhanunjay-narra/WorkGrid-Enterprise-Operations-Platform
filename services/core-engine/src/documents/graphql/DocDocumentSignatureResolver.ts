export const DocDocumentSignatureTypeDefs = `
  type DocDocumentSignature {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getDocDocumentSignature(id: ID!): DocDocumentSignature
    listDocDocumentSignatures(tenantId: String!): [DocDocumentSignature!]!
  }
`;

export const DocDocumentSignatureResolvers = {
  Query: {
    getDocDocumentSignature: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "DocDocumentSignature", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listDocDocumentSignatures: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "DocDocumentSignature", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
