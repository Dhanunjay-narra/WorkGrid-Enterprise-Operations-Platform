export const ObsAlertsEntryGqlTypeDefs = `
  type ObsAlertsEntry {
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
    getObsAlertsEntry(id: ID!): ObsAlertsEntry
    listObsAlertsEntrys(tenantId: String!, limit: Int): [ObsAlertsEntry!]!
  }

  extend type Mutation {
    createObsAlertsEntry(tenantId: String!, code: String!, name: String!): ObsAlertsEntry!
    deleteObsAlertsEntry(id: ID!): Boolean!
  }
`;

export const ObsAlertsEntryGqlResolvers = {
  Query: {
    getObsAlertsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsAlertsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
