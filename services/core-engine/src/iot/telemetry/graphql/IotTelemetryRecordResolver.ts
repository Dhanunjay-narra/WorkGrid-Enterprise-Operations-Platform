export const IotTelemetryRecordGqlTypeDefs = `
  type IotTelemetryRecord {
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
    getIotTelemetryRecord(id: ID!): IotTelemetryRecord
    listIotTelemetryRecords(tenantId: String!, limit: Int): [IotTelemetryRecord!]!
  }

  extend type Mutation {
    createIotTelemetryRecord(tenantId: String!, code: String!, name: String!): IotTelemetryRecord!
    deleteIotTelemetryRecord(id: ID!): Boolean!
  }
`;

export const IotTelemetryRecordGqlResolvers = {
  Query: {
    getIotTelemetryRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotTelemetryRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
