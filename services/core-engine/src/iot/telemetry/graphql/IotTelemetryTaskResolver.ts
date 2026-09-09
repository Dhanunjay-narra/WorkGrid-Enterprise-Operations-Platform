export const IotTelemetryTaskGqlTypeDefs = `
  type IotTelemetryTask {
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
    getIotTelemetryTask(id: ID!): IotTelemetryTask
    listIotTelemetryTasks(tenantId: String!, limit: Int): [IotTelemetryTask!]!
  }

  extend type Mutation {
    createIotTelemetryTask(tenantId: String!, code: String!, name: String!): IotTelemetryTask!
    deleteIotTelemetryTask(id: ID!): Boolean!
  }
`;

export const IotTelemetryTaskGqlResolvers = {
  Query: {
    getIotTelemetryTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotTelemetryTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
