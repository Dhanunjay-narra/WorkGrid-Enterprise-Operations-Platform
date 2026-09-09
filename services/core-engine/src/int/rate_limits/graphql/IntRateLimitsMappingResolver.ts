export const IntRateLimitsMappingGqlTypeDefs = `
  type IntRateLimitsMapping {
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
    getIntRateLimitsMapping(id: ID!): IntRateLimitsMapping
    listIntRateLimitsMappings(tenantId: String!, limit: Int): [IntRateLimitsMapping!]!
  }

  extend type Mutation {
    createIntRateLimitsMapping(tenantId: String!, code: String!, name: String!): IntRateLimitsMapping!
    deleteIntRateLimitsMapping(id: ID!): Boolean!
  }
`;

export const IntRateLimitsMappingGqlResolvers = {
  Query: {
    getIntRateLimitsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntRateLimitsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
