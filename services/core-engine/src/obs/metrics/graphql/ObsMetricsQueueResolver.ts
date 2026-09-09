export const ObsMetricsQueueGqlTypeDefs = `
  type ObsMetricsQueue {
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
    getObsMetricsQueue(id: ID!): ObsMetricsQueue
    listObsMetricsQueues(tenantId: String!, limit: Int): [ObsMetricsQueue!]!
  }

  extend type Mutation {
    createObsMetricsQueue(tenantId: String!, code: String!, name: String!): ObsMetricsQueue!
    deleteObsMetricsQueue(id: ID!): Boolean!
  }
`;

export const ObsMetricsQueueGqlResolvers = {
  Query: {
    getObsMetricsQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsMetricsQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
