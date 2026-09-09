export const IotFirmwareConfigGqlTypeDefs = `
  type IotFirmwareConfig {
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
    getIotFirmwareConfig(id: ID!): IotFirmwareConfig
    listIotFirmwareConfigs(tenantId: String!, limit: Int): [IotFirmwareConfig!]!
  }

  extend type Mutation {
    createIotFirmwareConfig(tenantId: String!, code: String!, name: String!): IotFirmwareConfig!
    deleteIotFirmwareConfig(id: ID!): Boolean!
  }
`;

export const IotFirmwareConfigGqlResolvers = {
  Query: {
    getIotFirmwareConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFirmwareConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
