export const SupportQueuesEntryGqlTypeDefs = `
  type SupportQueuesEntry {
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
    getSupportQueuesEntry(id: ID!): SupportQueuesEntry
    listSupportQueuesEntrys(tenantId: String!, limit: Int): [SupportQueuesEntry!]!
  }

  extend type Mutation {
    createSupportQueuesEntry(tenantId: String!, code: String!, name: String!): SupportQueuesEntry!
    deleteSupportQueuesEntry(id: ID!): Boolean!
  }
`;

export const SupportQueuesEntryGqlResolvers = {
  Query: {
    getSupportQueuesEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportQueuesEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
