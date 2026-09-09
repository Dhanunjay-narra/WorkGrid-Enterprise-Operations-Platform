export const IotTelemetryConfigGqlTypeDefs = `
  type IotTelemetryConfig {
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
    getIotTelemetryConfig(id: ID!): IotTelemetryConfig
    listIotTelemetryConfigs(tenantId: String!, limit: Int): [IotTelemetryConfig!]!
  }

  extend type Mutation {
    createIotTelemetryConfig(tenantId: String!, code: String!, name: String!): IotTelemetryConfig!
    deleteIotTelemetryConfig(id: ID!): Boolean!
  }
`;

export const IotTelemetryConfigGqlResolvers = {
  Query: {
    getIotTelemetryConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotTelemetryConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
