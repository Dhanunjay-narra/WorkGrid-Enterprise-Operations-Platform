export const SecRateLimitCounterTypeDefs = `
  type SecRateLimitCounter {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getSecRateLimitCounter(id: ID!): SecRateLimitCounter
    listSecRateLimitCounters(tenantId: String!): [SecRateLimitCounter!]!
  }
`;

export const SecRateLimitCounterResolvers = {
  Query: {
    getSecRateLimitCounter: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "SecRateLimitCounter", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listSecRateLimitCounters: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "SecRateLimitCounter", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
