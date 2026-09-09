export const IotFirmwareEntryGqlTypeDefs = `
  type IotFirmwareEntry {
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
    getIotFirmwareEntry(id: ID!): IotFirmwareEntry
    listIotFirmwareEntrys(tenantId: String!, limit: Int): [IotFirmwareEntry!]!
  }

  extend type Mutation {
    createIotFirmwareEntry(tenantId: String!, code: String!, name: String!): IotFirmwareEntry!
    deleteIotFirmwareEntry(id: ID!): Boolean!
  }
`;

export const IotFirmwareEntryGqlResolvers = {
  Query: {
    getIotFirmwareEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFirmwareEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
