export const IntWebhooksItemGqlTypeDefs = `
  type IntWebhooksItem {
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
    getIntWebhooksItem(id: ID!): IntWebhooksItem
    listIntWebhooksItems(tenantId: String!, limit: Int): [IntWebhooksItem!]!
  }

  extend type Mutation {
    createIntWebhooksItem(tenantId: String!, code: String!, name: String!): IntWebhooksItem!
    deleteIntWebhooksItem(id: ID!): Boolean!
  }
`;

export const IntWebhooksItemGqlResolvers = {
  Query: {
    getIntWebhooksItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntWebhooksItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
