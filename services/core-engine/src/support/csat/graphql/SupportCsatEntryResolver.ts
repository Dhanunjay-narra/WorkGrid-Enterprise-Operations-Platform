export const SupportCsatEntryGqlTypeDefs = `
  type SupportCsatEntry {
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
    getSupportCsatEntry(id: ID!): SupportCsatEntry
    listSupportCsatEntrys(tenantId: String!, limit: Int): [SupportCsatEntry!]!
  }

  extend type Mutation {
    createSupportCsatEntry(tenantId: String!, code: String!, name: String!): SupportCsatEntry!
    deleteSupportCsatEntry(id: ID!): Boolean!
  }
`;

export const SupportCsatEntryGqlResolvers = {
  Query: {
    getSupportCsatEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportCsatEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
