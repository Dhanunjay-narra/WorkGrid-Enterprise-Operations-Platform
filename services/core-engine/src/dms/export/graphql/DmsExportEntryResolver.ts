export const DmsExportEntryGqlTypeDefs = `
  type DmsExportEntry {
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
    getDmsExportEntry(id: ID!): DmsExportEntry
    listDmsExportEntrys(tenantId: String!, limit: Int): [DmsExportEntry!]!
  }

  extend type Mutation {
    createDmsExportEntry(tenantId: String!, code: String!, name: String!): DmsExportEntry!
    deleteDmsExportEntry(id: ID!): Boolean!
  }
`;

export const DmsExportEntryGqlResolvers = {
  Query: {
    getDmsExportEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsExportEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
