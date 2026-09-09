export const IotDeviceGroupTypeDefs = `
  type IotDeviceGroup {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIotDeviceGroup(id: ID!): IotDeviceGroup
    listIotDeviceGroups(tenantId: String!): [IotDeviceGroup!]!
  }
`;

export const IotDeviceGroupResolvers = {
  Query: {
    getIotDeviceGroup: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IotDeviceGroup", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIotDeviceGroups: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IotDeviceGroup", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
