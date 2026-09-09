export const AiTokenUsageRecordTypeDefs = `
  type AiTokenUsageRecord {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getAiTokenUsageRecord(id: ID!): AiTokenUsageRecord
    listAiTokenUsageRecords(tenantId: String!): [AiTokenUsageRecord!]!
  }
`;

export const AiTokenUsageRecordResolvers = {
  Query: {
    getAiTokenUsageRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "AiTokenUsageRecord", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listAiTokenUsageRecords: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "AiTokenUsageRecord", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
