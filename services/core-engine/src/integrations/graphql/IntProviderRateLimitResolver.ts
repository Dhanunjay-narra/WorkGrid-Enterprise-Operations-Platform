export const IntProviderRateLimitTypeDefs = `
  type IntProviderRateLimit {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIntProviderRateLimit(id: ID!): IntProviderRateLimit
    listIntProviderRateLimits(tenantId: String!): [IntProviderRateLimit!]!
  }
`;

export const IntProviderRateLimitResolvers = {
  Query: {
    getIntProviderRateLimit: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IntProviderRateLimit", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIntProviderRateLimits: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IntProviderRateLimit", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
