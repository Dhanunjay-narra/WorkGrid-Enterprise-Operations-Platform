export const DocChunkIndexTypeDefs = `
  type DocChunkIndex {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getDocChunkIndex(id: ID!): DocChunkIndex
    listDocChunkIndexs(tenantId: String!): [DocChunkIndex!]!
  }
`;

export const DocChunkIndexResolvers = {
  Query: {
    getDocChunkIndex: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "DocChunkIndex", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listDocChunkIndexs: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "DocChunkIndex", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
