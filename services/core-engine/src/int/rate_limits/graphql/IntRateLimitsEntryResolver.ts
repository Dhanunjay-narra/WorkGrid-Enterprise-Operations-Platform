export const IntRateLimitsEntryGqlTypeDefs = `
  type IntRateLimitsEntry {
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
    getIntRateLimitsEntry(id: ID!): IntRateLimitsEntry
    listIntRateLimitsEntrys(tenantId: String!, limit: Int): [IntRateLimitsEntry!]!
  }

  extend type Mutation {
    createIntRateLimitsEntry(tenantId: String!, code: String!, name: String!): IntRateLimitsEntry!
    deleteIntRateLimitsEntry(id: ID!): Boolean!
  }
`;

export const IntRateLimitsEntryGqlResolvers = {
  Query: {
    getIntRateLimitsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntRateLimitsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
