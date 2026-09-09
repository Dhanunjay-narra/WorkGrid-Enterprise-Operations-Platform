export const IdDirectorySyncTypeDefs = `
  type IdDirectorySync {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIdDirectorySync(id: ID!): IdDirectorySync
    listIdDirectorySyncs(tenantId: String!): [IdDirectorySync!]!
  }
`;

export const IdDirectorySyncResolvers = {
  Query: {
    getIdDirectorySync: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IdDirectorySync", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIdDirectorySyncs: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IdDirectorySync", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
