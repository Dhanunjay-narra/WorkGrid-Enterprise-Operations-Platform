export const CommThreadsEntryGqlTypeDefs = `
  type CommThreadsEntry {
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
    getCommThreadsEntry(id: ID!): CommThreadsEntry
    listCommThreadsEntrys(tenantId: String!, limit: Int): [CommThreadsEntry!]!
  }

  extend type Mutation {
    createCommThreadsEntry(tenantId: String!, code: String!, name: String!): CommThreadsEntry!
    deleteCommThreadsEntry(id: ID!): Boolean!
  }
`;

export const CommThreadsEntryGqlResolvers = {
  Query: {
    getCommThreadsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommThreadsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
