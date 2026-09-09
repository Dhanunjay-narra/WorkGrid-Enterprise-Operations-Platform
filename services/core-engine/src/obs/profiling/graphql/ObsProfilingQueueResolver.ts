export const ObsProfilingQueueGqlTypeDefs = `
  type ObsProfilingQueue {
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
    getObsProfilingQueue(id: ID!): ObsProfilingQueue
    listObsProfilingQueues(tenantId: String!, limit: Int): [ObsProfilingQueue!]!
  }

  extend type Mutation {
    createObsProfilingQueue(tenantId: String!, code: String!, name: String!): ObsProfilingQueue!
    deleteObsProfilingQueue(id: ID!): Boolean!
  }
`;

export const ObsProfilingQueueGqlResolvers = {
  Query: {
    getObsProfilingQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProfilingQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
