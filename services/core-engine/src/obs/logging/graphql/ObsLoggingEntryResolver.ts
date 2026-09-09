export const ObsLoggingEntryGqlTypeDefs = `
  type ObsLoggingEntry {
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
    getObsLoggingEntry(id: ID!): ObsLoggingEntry
    listObsLoggingEntrys(tenantId: String!, limit: Int): [ObsLoggingEntry!]!
  }

  extend type Mutation {
    createObsLoggingEntry(tenantId: String!, code: String!, name: String!): ObsLoggingEntry!
    deleteObsLoggingEntry(id: ID!): Boolean!
  }
`;

export const ObsLoggingEntryGqlResolvers = {
  Query: {
    getObsLoggingEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsLoggingEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
