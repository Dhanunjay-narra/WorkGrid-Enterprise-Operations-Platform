export const DocFolderTypeDefs = `
  type DocFolder {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getDocFolder(id: ID!): DocFolder
    listDocFolders(tenantId: String!): [DocFolder!]!
  }
`;

export const DocFolderResolvers = {
  Query: {
    getDocFolder: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "DocFolder", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listDocFolders: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "DocFolder", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
