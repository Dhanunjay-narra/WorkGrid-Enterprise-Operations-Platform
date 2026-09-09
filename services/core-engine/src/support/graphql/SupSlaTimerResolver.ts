export const SupSlaTimerTypeDefs = `
  type SupSlaTimer {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getSupSlaTimer(id: ID!): SupSlaTimer
    listSupSlaTimers(tenantId: String!): [SupSlaTimer!]!
  }
`;

export const SupSlaTimerResolvers = {
  Query: {
    getSupSlaTimer: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "SupSlaTimer", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listSupSlaTimers: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "SupSlaTimer", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
