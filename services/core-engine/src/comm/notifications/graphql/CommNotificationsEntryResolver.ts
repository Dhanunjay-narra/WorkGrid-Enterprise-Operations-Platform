export const CommNotificationsEntryGqlTypeDefs = `
  type CommNotificationsEntry {
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
    getCommNotificationsEntry(id: ID!): CommNotificationsEntry
    listCommNotificationsEntrys(tenantId: String!, limit: Int): [CommNotificationsEntry!]!
  }

  extend type Mutation {
    createCommNotificationsEntry(tenantId: String!, code: String!, name: String!): CommNotificationsEntry!
    deleteCommNotificationsEntry(id: ID!): Boolean!
  }
`;

export const CommNotificationsEntryGqlResolvers = {
  Query: {
    getCommNotificationsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommNotificationsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
