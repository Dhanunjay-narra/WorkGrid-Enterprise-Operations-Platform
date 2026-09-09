export const ObsLoggingQueueGqlTypeDefs = `
  type ObsLoggingQueue {
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
    getObsLoggingQueue(id: ID!): ObsLoggingQueue
    listObsLoggingQueues(tenantId: String!, limit: Int): [ObsLoggingQueue!]!
  }

  extend type Mutation {
    createObsLoggingQueue(tenantId: String!, code: String!, name: String!): ObsLoggingQueue!
    deleteObsLoggingQueue(id: ID!): Boolean!
  }
`;

export const ObsLoggingQueueGqlResolvers = {
  Query: {
    getObsLoggingQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsLoggingQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
