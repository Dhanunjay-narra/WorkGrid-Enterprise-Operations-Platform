export const CommMentionRecordTypeDefs = `
  type CommMentionRecord {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getCommMentionRecord(id: ID!): CommMentionRecord
    listCommMentionRecords(tenantId: String!): [CommMentionRecord!]!
  }
`;

export const CommMentionRecordResolvers = {
  Query: {
    getCommMentionRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "CommMentionRecord", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listCommMentionRecords: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "CommMentionRecord", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
