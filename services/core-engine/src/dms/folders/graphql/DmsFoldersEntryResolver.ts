export const DmsFoldersEntryGqlTypeDefs = `
  type DmsFoldersEntry {
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
    getDmsFoldersEntry(id: ID!): DmsFoldersEntry
    listDmsFoldersEntrys(tenantId: String!, limit: Int): [DmsFoldersEntry!]!
  }

  extend type Mutation {
    createDmsFoldersEntry(tenantId: String!, code: String!, name: String!): DmsFoldersEntry!
    deleteDmsFoldersEntry(id: ID!): Boolean!
  }
`;

export const DmsFoldersEntryGqlResolvers = {
  Query: {
    getDmsFoldersEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFoldersEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
