export const IotDevicesConfigGqlTypeDefs = `
  type IotDevicesConfig {
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
    getIotDevicesConfig(id: ID!): IotDevicesConfig
    listIotDevicesConfigs(tenantId: String!, limit: Int): [IotDevicesConfig!]!
  }

  extend type Mutation {
    createIotDevicesConfig(tenantId: String!, code: String!, name: String!): IotDevicesConfig!
    deleteIotDevicesConfig(id: ID!): Boolean!
  }
`;

export const IotDevicesConfigGqlResolvers = {
  Query: {
    getIotDevicesConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotDevicesConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
