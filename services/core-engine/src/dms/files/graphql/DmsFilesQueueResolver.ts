export const DmsFilesQueueGqlTypeDefs = `
  type DmsFilesQueue {
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
    getDmsFilesQueue(id: ID!): DmsFilesQueue
    listDmsFilesQueues(tenantId: String!, limit: Int): [DmsFilesQueue!]!
  }

  extend type Mutation {
    createDmsFilesQueue(tenantId: String!, code: String!, name: String!): DmsFilesQueue!
    deleteDmsFilesQueue(id: ID!): Boolean!
  }
`;

export const DmsFilesQueueGqlResolvers = {
  Query: {
    getDmsFilesQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFilesQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
