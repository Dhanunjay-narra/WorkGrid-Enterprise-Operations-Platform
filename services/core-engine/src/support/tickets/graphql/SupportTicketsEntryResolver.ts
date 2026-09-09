export const SupportTicketsEntryGqlTypeDefs = `
  type SupportTicketsEntry {
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
    getSupportTicketsEntry(id: ID!): SupportTicketsEntry
    listSupportTicketsEntrys(tenantId: String!, limit: Int): [SupportTicketsEntry!]!
  }

  extend type Mutation {
    createSupportTicketsEntry(tenantId: String!, code: String!, name: String!): SupportTicketsEntry!
    deleteSupportTicketsEntry(id: ID!): Boolean!
  }
`;

export const SupportTicketsEntryGqlResolvers = {
  Query: {
    getSupportTicketsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportTicketsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
