export const IntRateLimitsPolicyGqlTypeDefs = `
  type IntRateLimitsPolicy {
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
    getIntRateLimitsPolicy(id: ID!): IntRateLimitsPolicy
    listIntRateLimitsPolicys(tenantId: String!, limit: Int): [IntRateLimitsPolicy!]!
  }

  extend type Mutation {
    createIntRateLimitsPolicy(tenantId: String!, code: String!, name: String!): IntRateLimitsPolicy!
    deleteIntRateLimitsPolicy(id: ID!): Boolean!
  }
`;

export const IntRateLimitsPolicyGqlResolvers = {
  Query: {
    getIntRateLimitsPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntRateLimitsPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
