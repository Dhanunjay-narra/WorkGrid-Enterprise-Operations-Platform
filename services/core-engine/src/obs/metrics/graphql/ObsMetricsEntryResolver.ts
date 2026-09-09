export const ObsMetricsEntryGqlTypeDefs = `
  type ObsMetricsEntry {
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
    getObsMetricsEntry(id: ID!): ObsMetricsEntry
    listObsMetricsEntrys(tenantId: String!, limit: Int): [ObsMetricsEntry!]!
  }

  extend type Mutation {
    createObsMetricsEntry(tenantId: String!, code: String!, name: String!): ObsMetricsEntry!
    deleteObsMetricsEntry(id: ID!): Boolean!
  }
`;

export const ObsMetricsEntryGqlResolvers = {
  Query: {
    getObsMetricsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsMetricsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
