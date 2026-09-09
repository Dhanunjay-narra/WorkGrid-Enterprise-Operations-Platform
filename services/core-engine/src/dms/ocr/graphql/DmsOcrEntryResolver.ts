export const DmsOcrEntryGqlTypeDefs = `
  type DmsOcrEntry {
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
    getDmsOcrEntry(id: ID!): DmsOcrEntry
    listDmsOcrEntrys(tenantId: String!, limit: Int): [DmsOcrEntry!]!
  }

  extend type Mutation {
    createDmsOcrEntry(tenantId: String!, code: String!, name: String!): DmsOcrEntry!
    deleteDmsOcrEntry(id: ID!): Boolean!
  }
`;

export const DmsOcrEntryGqlResolvers = {
  Query: {
    getDmsOcrEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsOcrEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
