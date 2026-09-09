export const DmsVersionsEntryGqlTypeDefs = `
  type DmsVersionsEntry {
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
    getDmsVersionsEntry(id: ID!): DmsVersionsEntry
    listDmsVersionsEntrys(tenantId: String!, limit: Int): [DmsVersionsEntry!]!
  }

  extend type Mutation {
    createDmsVersionsEntry(tenantId: String!, code: String!, name: String!): DmsVersionsEntry!
    deleteDmsVersionsEntry(id: ID!): Boolean!
  }
`;

export const DmsVersionsEntryGqlResolvers = {
  Query: {
    getDmsVersionsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsVersionsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
