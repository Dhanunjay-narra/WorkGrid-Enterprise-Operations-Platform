export const CommPresenceEntryGqlTypeDefs = `
  type CommPresenceEntry {
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
    getCommPresenceEntry(id: ID!): CommPresenceEntry
    listCommPresenceEntrys(tenantId: String!, limit: Int): [CommPresenceEntry!]!
  }

  extend type Mutation {
    createCommPresenceEntry(tenantId: String!, code: String!, name: String!): CommPresenceEntry!
    deleteCommPresenceEntry(id: ID!): Boolean!
  }
`;

export const CommPresenceEntryGqlResolvers = {
  Query: {
    getCommPresenceEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommPresenceEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
