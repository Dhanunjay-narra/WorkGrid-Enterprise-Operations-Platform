export const IntWebhooksEntryGqlTypeDefs = `
  type IntWebhooksEntry {
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
    getIntWebhooksEntry(id: ID!): IntWebhooksEntry
    listIntWebhooksEntrys(tenantId: String!, limit: Int): [IntWebhooksEntry!]!
  }

  extend type Mutation {
    createIntWebhooksEntry(tenantId: String!, code: String!, name: String!): IntWebhooksEntry!
    deleteIntWebhooksEntry(id: ID!): Boolean!
  }
`;

export const IntWebhooksEntryGqlResolvers = {
  Query: {
    getIntWebhooksEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntWebhooksEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
