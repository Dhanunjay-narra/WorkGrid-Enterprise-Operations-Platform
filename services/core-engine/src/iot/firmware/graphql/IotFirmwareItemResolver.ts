export const IotFirmwareItemGqlTypeDefs = `
  type IotFirmwareItem {
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
    getIotFirmwareItem(id: ID!): IotFirmwareItem
    listIotFirmwareItems(tenantId: String!, limit: Int): [IotFirmwareItem!]!
  }

  extend type Mutation {
    createIotFirmwareItem(tenantId: String!, code: String!, name: String!): IotFirmwareItem!
    deleteIotFirmwareItem(id: ID!): Boolean!
  }
`;

export const IotFirmwareItemGqlResolvers = {
  Query: {
    getIotFirmwareItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFirmwareItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
