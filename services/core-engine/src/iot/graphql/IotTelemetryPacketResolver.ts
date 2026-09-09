export const IotTelemetryPacketTypeDefs = `
  type IotTelemetryPacket {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIotTelemetryPacket(id: ID!): IotTelemetryPacket
    listIotTelemetryPackets(tenantId: String!): [IotTelemetryPacket!]!
  }
`;

export const IotTelemetryPacketResolvers = {
  Query: {
    getIotTelemetryPacket: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IotTelemetryPacket", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIotTelemetryPackets: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IotTelemetryPacket", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
