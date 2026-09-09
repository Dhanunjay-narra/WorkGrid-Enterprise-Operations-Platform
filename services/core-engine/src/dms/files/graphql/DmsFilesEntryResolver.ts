export const DmsFilesEntryGqlTypeDefs = `
  type DmsFilesEntry {
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
    getDmsFilesEntry(id: ID!): DmsFilesEntry
    listDmsFilesEntrys(tenantId: String!, limit: Int): [DmsFilesEntry!]!
  }

  extend type Mutation {
    createDmsFilesEntry(tenantId: String!, code: String!, name: String!): DmsFilesEntry!
    deleteDmsFilesEntry(id: ID!): Boolean!
  }
`;

export const DmsFilesEntryGqlResolvers = {
  Query: {
    getDmsFilesEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFilesEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
