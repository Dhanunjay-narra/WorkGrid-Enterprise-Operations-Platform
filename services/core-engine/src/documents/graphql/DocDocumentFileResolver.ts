export const DocDocumentFileTypeDefs = `
  type DocDocumentFile {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getDocDocumentFile(id: ID!): DocDocumentFile
    listDocDocumentFiles(tenantId: String!): [DocDocumentFile!]!
  }
`;

export const DocDocumentFileResolvers = {
  Query: {
    getDocDocumentFile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "DocDocumentFile", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listDocDocumentFiles: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "DocDocumentFile", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
