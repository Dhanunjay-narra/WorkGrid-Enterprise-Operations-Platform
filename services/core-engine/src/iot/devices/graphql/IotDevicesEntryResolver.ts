export const IotDevicesEntryGqlTypeDefs = `
  type IotDevicesEntry {
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
    getIotDevicesEntry(id: ID!): IotDevicesEntry
    listIotDevicesEntrys(tenantId: String!, limit: Int): [IotDevicesEntry!]!
  }

  extend type Mutation {
    createIotDevicesEntry(tenantId: String!, code: String!, name: String!): IotDevicesEntry!
    deleteIotDevicesEntry(id: ID!): Boolean!
  }
`;

export const IotDevicesEntryGqlResolvers = {
  Query: {
    getIotDevicesEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotDevicesEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
