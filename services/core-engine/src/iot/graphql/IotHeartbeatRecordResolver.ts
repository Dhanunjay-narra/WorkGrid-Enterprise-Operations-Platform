export const IotHeartbeatRecordTypeDefs = `
  type IotHeartbeatRecord {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIotHeartbeatRecord(id: ID!): IotHeartbeatRecord
    listIotHeartbeatRecords(tenantId: String!): [IotHeartbeatRecord!]!
  }
`;

export const IotHeartbeatRecordResolvers = {
  Query: {
    getIotHeartbeatRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IotHeartbeatRecord", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIotHeartbeatRecords: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IotHeartbeatRecord", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
