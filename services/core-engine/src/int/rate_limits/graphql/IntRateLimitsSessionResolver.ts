export const IntRateLimitsSessionGqlTypeDefs = `
  type IntRateLimitsSession {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    version: Int!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    getIntRateLimitsSession(id: ID!): IntRateLimitsSession
    listIntRateLimitsSessions(tenantId: String!, limit: Int): [IntRateLimitsSession!]!
  }

  extend type Mutation {
    createIntRateLimitsSession(tenantId: String!, code: String!, name: String!): IntRateLimitsSession!
    deleteIntRateLimitsSession(id: ID!): Boolean!
  }
`;

export const IntRateLimitsSessionGqlResolvers = {
  Query: {
    getIntRateLimitsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntRateLimitsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
