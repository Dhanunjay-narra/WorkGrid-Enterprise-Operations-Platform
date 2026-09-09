export const IotTelemetryEntryGqlTypeDefs = `
  type IotTelemetryEntry {
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
    getIotTelemetryEntry(id: ID!): IotTelemetryEntry
    listIotTelemetryEntrys(tenantId: String!, limit: Int): [IotTelemetryEntry!]!
  }

  extend type Mutation {
    createIotTelemetryEntry(tenantId: String!, code: String!, name: String!): IotTelemetryEntry!
    deleteIotTelemetryEntry(id: ID!): Boolean!
  }
`;

export const IotTelemetryEntryGqlResolvers = {
  Query: {
    getIotTelemetryEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotTelemetryEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
