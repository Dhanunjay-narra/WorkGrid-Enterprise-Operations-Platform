export const IotDevicesPolicyGqlTypeDefs = `
  type IotDevicesPolicy {
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
    getIotDevicesPolicy(id: ID!): IotDevicesPolicy
    listIotDevicesPolicys(tenantId: String!, limit: Int): [IotDevicesPolicy!]!
  }

  extend type Mutation {
    createIotDevicesPolicy(tenantId: String!, code: String!, name: String!): IotDevicesPolicy!
    deleteIotDevicesPolicy(id: ID!): Boolean!
  }
`;

export const IotDevicesPolicyGqlResolvers = {
  Query: {
    getIotDevicesPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotDevicesPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
