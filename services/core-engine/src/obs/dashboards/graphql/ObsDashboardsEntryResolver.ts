export const ObsDashboardsEntryGqlTypeDefs = `
  type ObsDashboardsEntry {
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
    getObsDashboardsEntry(id: ID!): ObsDashboardsEntry
    listObsDashboardsEntrys(tenantId: String!, limit: Int): [ObsDashboardsEntry!]!
  }

  extend type Mutation {
    createObsDashboardsEntry(tenantId: String!, code: String!, name: String!): ObsDashboardsEntry!
    deleteObsDashboardsEntry(id: ID!): Boolean!
  }
`;

export const ObsDashboardsEntryGqlResolvers = {
  Query: {
    getObsDashboardsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsDashboardsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
