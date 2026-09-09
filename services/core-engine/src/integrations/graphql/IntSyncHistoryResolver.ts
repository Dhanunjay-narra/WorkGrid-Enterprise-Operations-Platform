export const IntSyncHistoryTypeDefs = `
  type IntSyncHistory {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIntSyncHistory(id: ID!): IntSyncHistory
    listIntSyncHistorys(tenantId: String!): [IntSyncHistory!]!
  }
`;

export const IntSyncHistoryResolvers = {
  Query: {
    getIntSyncHistory: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IntSyncHistory", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIntSyncHistorys: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IntSyncHistory", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
