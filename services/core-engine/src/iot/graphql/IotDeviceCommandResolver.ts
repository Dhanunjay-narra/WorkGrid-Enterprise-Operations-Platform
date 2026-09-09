export const IotDeviceCommandTypeDefs = `
  type IotDeviceCommand {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIotDeviceCommand(id: ID!): IotDeviceCommand
    listIotDeviceCommands(tenantId: String!): [IotDeviceCommand!]!
  }
`;

export const IotDeviceCommandResolvers = {
  Query: {
    getIotDeviceCommand: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IotDeviceCommand", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIotDeviceCommands: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IotDeviceCommand", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
