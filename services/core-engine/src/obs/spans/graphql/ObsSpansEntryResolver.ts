export const ObsSpansEntryGqlTypeDefs = `
  type ObsSpansEntry {
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
    getObsSpansEntry(id: ID!): ObsSpansEntry
    listObsSpansEntrys(tenantId: String!, limit: Int): [ObsSpansEntry!]!
  }

  extend type Mutation {
    createObsSpansEntry(tenantId: String!, code: String!, name: String!): ObsSpansEntry!
    deleteObsSpansEntry(id: ID!): Boolean!
  }
`;

export const ObsSpansEntryGqlResolvers = {
  Query: {
    getObsSpansEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsSpansEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
