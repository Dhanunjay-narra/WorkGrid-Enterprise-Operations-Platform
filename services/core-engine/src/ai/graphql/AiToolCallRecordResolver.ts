export const AiToolCallRecordTypeDefs = `
  type AiToolCallRecord {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getAiToolCallRecord(id: ID!): AiToolCallRecord
    listAiToolCallRecords(tenantId: String!): [AiToolCallRecord!]!
  }
`;

export const AiToolCallRecordResolvers = {
  Query: {
    getAiToolCallRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "AiToolCallRecord", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listAiToolCallRecords: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "AiToolCallRecord", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
