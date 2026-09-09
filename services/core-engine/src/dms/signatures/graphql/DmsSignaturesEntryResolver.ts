export const DmsSignaturesEntryGqlTypeDefs = `
  type DmsSignaturesEntry {
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
    getDmsSignaturesEntry(id: ID!): DmsSignaturesEntry
    listDmsSignaturesEntrys(tenantId: String!, limit: Int): [DmsSignaturesEntry!]!
  }

  extend type Mutation {
    createDmsSignaturesEntry(tenantId: String!, code: String!, name: String!): DmsSignaturesEntry!
    deleteDmsSignaturesEntry(id: ID!): Boolean!
  }
`;

export const DmsSignaturesEntryGqlResolvers = {
  Query: {
    getDmsSignaturesEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsSignaturesEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
