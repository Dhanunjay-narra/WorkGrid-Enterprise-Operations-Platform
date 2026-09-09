export const DmsRetentionEntryGqlTypeDefs = `
  type DmsRetentionEntry {
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
    getDmsRetentionEntry(id: ID!): DmsRetentionEntry
    listDmsRetentionEntrys(tenantId: String!, limit: Int): [DmsRetentionEntry!]!
  }

  extend type Mutation {
    createDmsRetentionEntry(tenantId: String!, code: String!, name: String!): DmsRetentionEntry!
    deleteDmsRetentionEntry(id: ID!): Boolean!
  }
`;

export const DmsRetentionEntryGqlResolvers = {
  Query: {
    getDmsRetentionEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsRetentionEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
