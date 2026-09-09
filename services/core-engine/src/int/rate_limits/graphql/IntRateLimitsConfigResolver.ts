export const IntRateLimitsConfigGqlTypeDefs = `
  type IntRateLimitsConfig {
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
    getIntRateLimitsConfig(id: ID!): IntRateLimitsConfig
    listIntRateLimitsConfigs(tenantId: String!, limit: Int): [IntRateLimitsConfig!]!
  }

  extend type Mutation {
    createIntRateLimitsConfig(tenantId: String!, code: String!, name: String!): IntRateLimitsConfig!
    deleteIntRateLimitsConfig(id: ID!): Boolean!
  }
`;

export const IntRateLimitsConfigGqlResolvers = {
  Query: {
    getIntRateLimitsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntRateLimitsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
