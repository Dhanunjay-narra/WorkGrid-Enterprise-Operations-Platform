export const SupportSlaEntryGqlTypeDefs = `
  type SupportSlaEntry {
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
    getSupportSlaEntry(id: ID!): SupportSlaEntry
    listSupportSlaEntrys(tenantId: String!, limit: Int): [SupportSlaEntry!]!
  }

  extend type Mutation {
    createSupportSlaEntry(tenantId: String!, code: String!, name: String!): SupportSlaEntry!
    deleteSupportSlaEntry(id: ID!): Boolean!
  }
`;

export const SupportSlaEntryGqlResolvers = {
  Query: {
    getSupportSlaEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSlaEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
