export const IotTelemetryPayloadGqlTypeDefs = `
  type IotTelemetryPayload {
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
    getIotTelemetryPayload(id: ID!): IotTelemetryPayload
    listIotTelemetryPayloads(tenantId: String!, limit: Int): [IotTelemetryPayload!]!
  }

  extend type Mutation {
    createIotTelemetryPayload(tenantId: String!, code: String!, name: String!): IotTelemetryPayload!
    deleteIotTelemetryPayload(id: ID!): Boolean!
  }
`;

export const IotTelemetryPayloadGqlResolvers = {
  Query: {
    getIotTelemetryPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotTelemetryPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
