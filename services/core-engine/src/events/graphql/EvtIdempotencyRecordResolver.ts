export const EvtIdempotencyRecordTypeDefs = `
  type EvtIdempotencyRecord {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getEvtIdempotencyRecord(id: ID!): EvtIdempotencyRecord
    listEvtIdempotencyRecords(tenantId: String!): [EvtIdempotencyRecord!]!
  }
`;

export const EvtIdempotencyRecordResolvers = {
  Query: {
    getEvtIdempotencyRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "EvtIdempotencyRecord", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listEvtIdempotencyRecords: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "EvtIdempotencyRecord", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
