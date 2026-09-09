export const IotDeviceTypeDefs = `
  type IotDevice {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIotDevice(id: ID!): IotDevice
    listIotDevices(tenantId: String!): [IotDevice!]!
  }
`;

export const IotDeviceResolvers = {
  Query: {
    getIotDevice: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IotDevice", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIotDevices: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IotDevice", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
