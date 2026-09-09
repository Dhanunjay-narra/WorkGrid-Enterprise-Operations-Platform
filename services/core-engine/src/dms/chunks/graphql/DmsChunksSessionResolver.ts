export const DmsChunksSessionGqlTypeDefs = `
  type DmsChunksSession {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    version: Int!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    getDmsChunksSession(id: ID!): DmsChunksSession
    listDmsChunksSessions(tenantId: String!, limit: Int): [DmsChunksSession!]!
  }

  extend type Mutation {
    createDmsChunksSession(tenantId: String!, code: String!, name: String!): DmsChunksSession!
    deleteDmsChunksSession(id: ID!): Boolean!
  }
`;

export const DmsChunksSessionGqlResolvers = {
  Query: {
    getDmsChunksSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsChunksSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
