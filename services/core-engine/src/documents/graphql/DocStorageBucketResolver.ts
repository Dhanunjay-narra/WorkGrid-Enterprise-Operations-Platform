export const DocStorageBucketTypeDefs = `
  type DocStorageBucket {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getDocStorageBucket(id: ID!): DocStorageBucket
    listDocStorageBuckets(tenantId: String!): [DocStorageBucket!]!
  }
`;

export const DocStorageBucketResolvers = {
  Query: {
    getDocStorageBucket: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "DocStorageBucket", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listDocStorageBuckets: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "DocStorageBucket", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
