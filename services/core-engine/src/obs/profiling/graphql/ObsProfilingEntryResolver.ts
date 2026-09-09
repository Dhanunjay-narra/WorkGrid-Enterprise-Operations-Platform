export const ObsProfilingEntryGqlTypeDefs = `
  type ObsProfilingEntry {
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
    getObsProfilingEntry(id: ID!): ObsProfilingEntry
    listObsProfilingEntrys(tenantId: String!, limit: Int): [ObsProfilingEntry!]!
  }

  extend type Mutation {
    createObsProfilingEntry(tenantId: String!, code: String!, name: String!): ObsProfilingEntry!
    deleteObsProfilingEntry(id: ID!): Boolean!
  }
`;

export const ObsProfilingEntryGqlResolvers = {
  Query: {
    getObsProfilingEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProfilingEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
