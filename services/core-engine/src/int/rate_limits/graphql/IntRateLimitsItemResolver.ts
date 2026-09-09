export const IntRateLimitsItemGqlTypeDefs = `
  type IntRateLimitsItem {
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
    getIntRateLimitsItem(id: ID!): IntRateLimitsItem
    listIntRateLimitsItems(tenantId: String!, limit: Int): [IntRateLimitsItem!]!
  }

  extend type Mutation {
    createIntRateLimitsItem(tenantId: String!, code: String!, name: String!): IntRateLimitsItem!
    deleteIntRateLimitsItem(id: ID!): Boolean!
  }
`;

export const IntRateLimitsItemGqlResolvers = {
  Query: {
    getIntRateLimitsItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntRateLimitsItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
