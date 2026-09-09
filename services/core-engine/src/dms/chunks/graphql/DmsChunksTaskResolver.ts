export const DmsChunksTaskGqlTypeDefs = `
  type DmsChunksTask {
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
    getDmsChunksTask(id: ID!): DmsChunksTask
    listDmsChunksTasks(tenantId: String!, limit: Int): [DmsChunksTask!]!
  }

  extend type Mutation {
    createDmsChunksTask(tenantId: String!, code: String!, name: String!): DmsChunksTask!
    deleteDmsChunksTask(id: ID!): Boolean!
  }
`;

export const DmsChunksTaskGqlResolvers = {
  Query: {
    getDmsChunksTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsChunksTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
