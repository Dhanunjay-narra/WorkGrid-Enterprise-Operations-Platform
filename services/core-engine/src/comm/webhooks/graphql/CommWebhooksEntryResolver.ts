export const CommWebhooksEntryGqlTypeDefs = `
  type CommWebhooksEntry {
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
    getCommWebhooksEntry(id: ID!): CommWebhooksEntry
    listCommWebhooksEntrys(tenantId: String!, limit: Int): [CommWebhooksEntry!]!
  }

  extend type Mutation {
    createCommWebhooksEntry(tenantId: String!, code: String!, name: String!): CommWebhooksEntry!
    deleteCommWebhooksEntry(id: ID!): Boolean!
  }
`;

export const CommWebhooksEntryGqlResolvers = {
  Query: {
    getCommWebhooksEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommWebhooksEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
