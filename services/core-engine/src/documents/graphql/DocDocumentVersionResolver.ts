export const DocDocumentVersionTypeDefs = `
  type DocDocumentVersion {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getDocDocumentVersion(id: ID!): DocDocumentVersion
    listDocDocumentVersions(tenantId: String!): [DocDocumentVersion!]!
  }
`;

export const DocDocumentVersionResolvers = {
  Query: {
    getDocDocumentVersion: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "DocDocumentVersion", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listDocDocumentVersions: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "DocDocumentVersion", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
