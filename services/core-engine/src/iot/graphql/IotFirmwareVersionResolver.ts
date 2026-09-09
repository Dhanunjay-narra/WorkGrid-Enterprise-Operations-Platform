export const IotFirmwareVersionTypeDefs = `
  type IotFirmwareVersion {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIotFirmwareVersion(id: ID!): IotFirmwareVersion
    listIotFirmwareVersions(tenantId: String!): [IotFirmwareVersion!]!
  }
`;

export const IotFirmwareVersionResolvers = {
  Query: {
    getIotFirmwareVersion: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IotFirmwareVersion", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIotFirmwareVersions: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IotFirmwareVersion", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
