export const ObsProbesEntryGqlTypeDefs = `
  type ObsProbesEntry {
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
    getObsProbesEntry(id: ID!): ObsProbesEntry
    listObsProbesEntrys(tenantId: String!, limit: Int): [ObsProbesEntry!]!
  }

  extend type Mutation {
    createObsProbesEntry(tenantId: String!, code: String!, name: String!): ObsProbesEntry!
    deleteObsProbesEntry(id: ID!): Boolean!
  }
`;

export const ObsProbesEntryGqlResolvers = {
  Query: {
    getObsProbesEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProbesEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
