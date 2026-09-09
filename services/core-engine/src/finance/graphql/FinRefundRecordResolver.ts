export const FinRefundRecordTypeDefs = `
  type FinRefundRecord {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getFinRefundRecord(id: ID!): FinRefundRecord
    listFinRefundRecords(tenantId: String!): [FinRefundRecord!]!
  }
`;

export const FinRefundRecordResolvers = {
  Query: {
    getFinRefundRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "FinRefundRecord", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listFinRefundRecords: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "FinRefundRecord", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
