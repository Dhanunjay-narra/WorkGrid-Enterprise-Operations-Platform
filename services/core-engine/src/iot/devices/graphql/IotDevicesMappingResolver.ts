export const IotDevicesMappingGqlTypeDefs = `
  type IotDevicesMapping {
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
    getIotDevicesMapping(id: ID!): IotDevicesMapping
    listIotDevicesMappings(tenantId: String!, limit: Int): [IotDevicesMapping!]!
  }

  extend type Mutation {
    createIotDevicesMapping(tenantId: String!, code: String!, name: String!): IotDevicesMapping!
    deleteIotDevicesMapping(id: ID!): Boolean!
  }
`;

export const IotDevicesMappingGqlResolvers = {
  Query: {
    getIotDevicesMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotDevicesMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
