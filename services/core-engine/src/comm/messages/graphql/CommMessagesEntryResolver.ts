export const CommMessagesEntryGqlTypeDefs = `
  type CommMessagesEntry {
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
    getCommMessagesEntry(id: ID!): CommMessagesEntry
    listCommMessagesEntrys(tenantId: String!, limit: Int): [CommMessagesEntry!]!
  }

  extend type Mutation {
    createCommMessagesEntry(tenantId: String!, code: String!, name: String!): CommMessagesEntry!
    deleteCommMessagesEntry(id: ID!): Boolean!
  }
`;

export const CommMessagesEntryGqlResolvers = {
  Query: {
    getCommMessagesEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommMessagesEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
