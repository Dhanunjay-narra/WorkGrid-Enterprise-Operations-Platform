export const CommChannelsEntryGqlTypeDefs = `
  type CommChannelsEntry {
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
    getCommChannelsEntry(id: ID!): CommChannelsEntry
    listCommChannelsEntrys(tenantId: String!, limit: Int): [CommChannelsEntry!]!
  }

  extend type Mutation {
    createCommChannelsEntry(tenantId: String!, code: String!, name: String!): CommChannelsEntry!
    deleteCommChannelsEntry(id: ID!): Boolean!
  }
`;

export const CommChannelsEntryGqlResolvers = {
  Query: {
    getCommChannelsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommChannelsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
