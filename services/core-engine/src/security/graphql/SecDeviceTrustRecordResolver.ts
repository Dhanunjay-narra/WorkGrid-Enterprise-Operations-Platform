export const SecDeviceTrustRecordTypeDefs = `
  type SecDeviceTrustRecord {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getSecDeviceTrustRecord(id: ID!): SecDeviceTrustRecord
    listSecDeviceTrustRecords(tenantId: String!): [SecDeviceTrustRecord!]!
  }
`;

export const SecDeviceTrustRecordResolvers = {
  Query: {
    getSecDeviceTrustRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "SecDeviceTrustRecord", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listSecDeviceTrustRecords: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "SecDeviceTrustRecord", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
