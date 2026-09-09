export const IotTelemetryThresholdGqlTypeDefs = `
  type IotTelemetryThreshold {
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
    getIotTelemetryThreshold(id: ID!): IotTelemetryThreshold
    listIotTelemetryThresholds(tenantId: String!, limit: Int): [IotTelemetryThreshold!]!
  }

  extend type Mutation {
    createIotTelemetryThreshold(tenantId: String!, code: String!, name: String!): IotTelemetryThreshold!
    deleteIotTelemetryThreshold(id: ID!): Boolean!
  }
`;

export const IotTelemetryThresholdGqlResolvers = {
  Query: {
    getIotTelemetryThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotTelemetryThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
