export const IotFirmwareRecordGqlTypeDefs = `
  type IotFirmwareRecord {
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
    getIotFirmwareRecord(id: ID!): IotFirmwareRecord
    listIotFirmwareRecords(tenantId: String!, limit: Int): [IotFirmwareRecord!]!
  }

  extend type Mutation {
    createIotFirmwareRecord(tenantId: String!, code: String!, name: String!): IotFirmwareRecord!
    deleteIotFirmwareRecord(id: ID!): Boolean!
  }
`;

export const IotFirmwareRecordGqlResolvers = {
  Query: {
    getIotFirmwareRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFirmwareRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
