export const IotTelemetryEventGqlTypeDefs = `
  type IotTelemetryEvent {
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
    getIotTelemetryEvent(id: ID!): IotTelemetryEvent
    listIotTelemetryEvents(tenantId: String!, limit: Int): [IotTelemetryEvent!]!
  }

  extend type Mutation {
    createIotTelemetryEvent(tenantId: String!, code: String!, name: String!): IotTelemetryEvent!
    deleteIotTelemetryEvent(id: ID!): Boolean!
  }
`;

export const IotTelemetryEventGqlResolvers = {
  Query: {
    getIotTelemetryEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotTelemetryEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
