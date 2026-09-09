export const IntRateLimitsBatchGqlTypeDefs = `
  type IntRateLimitsBatch {
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
    getIntRateLimitsBatch(id: ID!): IntRateLimitsBatch
    listIntRateLimitsBatchs(tenantId: String!, limit: Int): [IntRateLimitsBatch!]!
  }

  extend type Mutation {
    createIntRateLimitsBatch(tenantId: String!, code: String!, name: String!): IntRateLimitsBatch!
    deleteIntRateLimitsBatch(id: ID!): Boolean!
  }
`;

export const IntRateLimitsBatchGqlResolvers = {
  Query: {
    getIntRateLimitsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntRateLimitsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
