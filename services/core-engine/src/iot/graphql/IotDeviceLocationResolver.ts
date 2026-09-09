export const IotDeviceLocationTypeDefs = `
  type IotDeviceLocation {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIotDeviceLocation(id: ID!): IotDeviceLocation
    listIotDeviceLocations(tenantId: String!): [IotDeviceLocation!]!
  }
`;

export const IotDeviceLocationResolvers = {
  Query: {
    getIotDeviceLocation: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IotDeviceLocation", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIotDeviceLocations: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IotDeviceLocation", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
