export const IntRateLimitsSummaryGqlTypeDefs = `
  type IntRateLimitsSummary {
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
    getIntRateLimitsSummary(id: ID!): IntRateLimitsSummary
    listIntRateLimitsSummarys(tenantId: String!, limit: Int): [IntRateLimitsSummary!]!
  }

  extend type Mutation {
    createIntRateLimitsSummary(tenantId: String!, code: String!, name: String!): IntRateLimitsSummary!
    deleteIntRateLimitsSummary(id: ID!): Boolean!
  }
`;

export const IntRateLimitsSummaryGqlResolvers = {
  Query: {
    getIntRateLimitsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntRateLimitsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
