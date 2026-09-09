export const ObsSpansQueueGqlTypeDefs = `
  type ObsSpansQueue {
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
    getObsSpansQueue(id: ID!): ObsSpansQueue
    listObsSpansQueues(tenantId: String!, limit: Int): [ObsSpansQueue!]!
  }

  extend type Mutation {
    createObsSpansQueue(tenantId: String!, code: String!, name: String!): ObsSpansQueue!
    deleteObsSpansQueue(id: ID!): Boolean!
  }
`;

export const ObsSpansQueueGqlResolvers = {
  Query: {
    getObsSpansQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsSpansQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
