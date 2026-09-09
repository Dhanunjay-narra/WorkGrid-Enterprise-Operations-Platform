export const IotTelemetryMappingGqlTypeDefs = `
  type IotTelemetryMapping {
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
    getIotTelemetryMapping(id: ID!): IotTelemetryMapping
    listIotTelemetryMappings(tenantId: String!, limit: Int): [IotTelemetryMapping!]!
  }

  extend type Mutation {
    createIotTelemetryMapping(tenantId: String!, code: String!, name: String!): IotTelemetryMapping!
    deleteIotTelemetryMapping(id: ID!): Boolean!
  }
`;

export const IotTelemetryMappingGqlResolvers = {
  Query: {
    getIotTelemetryMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotTelemetryMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
