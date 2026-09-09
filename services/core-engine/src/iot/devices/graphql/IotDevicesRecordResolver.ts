export const IotDevicesRecordGqlTypeDefs = `
  type IotDevicesRecord {
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
    getIotDevicesRecord(id: ID!): IotDevicesRecord
    listIotDevicesRecords(tenantId: String!, limit: Int): [IotDevicesRecord!]!
  }

  extend type Mutation {
    createIotDevicesRecord(tenantId: String!, code: String!, name: String!): IotDevicesRecord!
    deleteIotDevicesRecord(id: ID!): Boolean!
  }
`;

export const IotDevicesRecordGqlResolvers = {
  Query: {
    getIotDevicesRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotDevicesRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
