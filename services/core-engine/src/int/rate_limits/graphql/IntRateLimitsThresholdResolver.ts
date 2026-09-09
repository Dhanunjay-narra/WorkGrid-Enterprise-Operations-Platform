export const IntRateLimitsThresholdGqlTypeDefs = `
  type IntRateLimitsThreshold {
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
    getIntRateLimitsThreshold(id: ID!): IntRateLimitsThreshold
    listIntRateLimitsThresholds(tenantId: String!, limit: Int): [IntRateLimitsThreshold!]!
  }

  extend type Mutation {
    createIntRateLimitsThreshold(tenantId: String!, code: String!, name: String!): IntRateLimitsThreshold!
    deleteIntRateLimitsThreshold(id: ID!): Boolean!
  }
`;

export const IntRateLimitsThresholdGqlResolvers = {
  Query: {
    getIntRateLimitsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntRateLimitsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
