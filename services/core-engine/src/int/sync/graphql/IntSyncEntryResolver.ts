export const IntSyncEntryGqlTypeDefs = `
  type IntSyncEntry {
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
    getIntSyncEntry(id: ID!): IntSyncEntry
    listIntSyncEntrys(tenantId: String!, limit: Int): [IntSyncEntry!]!
  }

  extend type Mutation {
    createIntSyncEntry(tenantId: String!, code: String!, name: String!): IntSyncEntry!
    deleteIntSyncEntry(id: ID!): Boolean!
  }
`;

export const IntSyncEntryGqlResolvers = {
  Query: {
    getIntSyncEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSyncEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
