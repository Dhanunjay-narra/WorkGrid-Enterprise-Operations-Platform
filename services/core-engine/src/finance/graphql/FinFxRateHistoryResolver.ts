export const FinFxRateHistoryTypeDefs = `
  type FinFxRateHistory {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getFinFxRateHistory(id: ID!): FinFxRateHistory
    listFinFxRateHistorys(tenantId: String!): [FinFxRateHistory!]!
  }
`;

export const FinFxRateHistoryResolvers = {
  Query: {
    getFinFxRateHistory: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "FinFxRateHistory", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listFinFxRateHistorys: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "FinFxRateHistory", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
