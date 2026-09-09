export const SupportAgentsEntryGqlTypeDefs = `
  type SupportAgentsEntry {
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
    getSupportAgentsEntry(id: ID!): SupportAgentsEntry
    listSupportAgentsEntrys(tenantId: String!, limit: Int): [SupportAgentsEntry!]!
  }

  extend type Mutation {
    createSupportAgentsEntry(tenantId: String!, code: String!, name: String!): SupportAgentsEntry!
    deleteSupportAgentsEntry(id: ID!): Boolean!
  }
`;

export const SupportAgentsEntryGqlResolvers = {
  Query: {
    getSupportAgentsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportAgentsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
