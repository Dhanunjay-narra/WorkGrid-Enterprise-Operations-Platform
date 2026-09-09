export const DmsChunksEntryGqlTypeDefs = `
  type DmsChunksEntry {
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
    getDmsChunksEntry(id: ID!): DmsChunksEntry
    listDmsChunksEntrys(tenantId: String!, limit: Int): [DmsChunksEntry!]!
  }

  extend type Mutation {
    createDmsChunksEntry(tenantId: String!, code: String!, name: String!): DmsChunksEntry!
    deleteDmsChunksEntry(id: ID!): Boolean!
  }
`;

export const DmsChunksEntryGqlResolvers = {
  Query: {
    getDmsChunksEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsChunksEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
