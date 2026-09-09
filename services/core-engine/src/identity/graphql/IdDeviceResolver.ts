export const IdDeviceTypeDefs = `
  type IdDevice {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIdDevice(id: ID!): IdDevice
    listIdDevices(tenantId: String!): [IdDevice!]!
  }
`;

export const IdDeviceResolvers = {
  Query: {
    getIdDevice: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IdDevice", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIdDevices: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IdDevice", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
