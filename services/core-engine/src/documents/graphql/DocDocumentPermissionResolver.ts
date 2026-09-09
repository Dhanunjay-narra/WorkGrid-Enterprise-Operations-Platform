export const DocDocumentPermissionTypeDefs = `
  type DocDocumentPermission {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getDocDocumentPermission(id: ID!): DocDocumentPermission
    listDocDocumentPermissions(tenantId: String!): [DocDocumentPermission!]!
  }
`;

export const DocDocumentPermissionResolvers = {
  Query: {
    getDocDocumentPermission: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "DocDocumentPermission", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listDocDocumentPermissions: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "DocDocumentPermission", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
