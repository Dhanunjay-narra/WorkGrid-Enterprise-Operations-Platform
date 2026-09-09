export const ObsAlertsQueueGqlTypeDefs = `
  type ObsAlertsQueue {
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
    getObsAlertsQueue(id: ID!): ObsAlertsQueue
    listObsAlertsQueues(tenantId: String!, limit: Int): [ObsAlertsQueue!]!
  }

  extend type Mutation {
    createObsAlertsQueue(tenantId: String!, code: String!, name: String!): ObsAlertsQueue!
    deleteObsAlertsQueue(id: ID!): Boolean!
  }
`;

export const ObsAlertsQueueGqlResolvers = {
  Query: {
    getObsAlertsQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsAlertsQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
