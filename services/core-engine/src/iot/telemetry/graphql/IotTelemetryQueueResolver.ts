export const IotTelemetryQueueGqlTypeDefs = `
  type IotTelemetryQueue {
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
    getIotTelemetryQueue(id: ID!): IotTelemetryQueue
    listIotTelemetryQueues(tenantId: String!, limit: Int): [IotTelemetryQueue!]!
  }

  extend type Mutation {
    createIotTelemetryQueue(tenantId: String!, code: String!, name: String!): IotTelemetryQueue!
    deleteIotTelemetryQueue(id: ID!): Boolean!
  }
`;

export const IotTelemetryQueueGqlResolvers = {
  Query: {
    getIotTelemetryQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotTelemetryQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
