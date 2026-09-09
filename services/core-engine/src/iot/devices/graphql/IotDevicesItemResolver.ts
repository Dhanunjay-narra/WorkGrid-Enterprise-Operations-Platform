export const IotDevicesItemGqlTypeDefs = `
  type IotDevicesItem {
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
    getIotDevicesItem(id: ID!): IotDevicesItem
    listIotDevicesItems(tenantId: String!, limit: Int): [IotDevicesItem!]!
  }

  extend type Mutation {
    createIotDevicesItem(tenantId: String!, code: String!, name: String!): IotDevicesItem!
    deleteIotDevicesItem(id: ID!): Boolean!
  }
`;

export const IotDevicesItemGqlResolvers = {
  Query: {
    getIotDevicesItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotDevicesItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
