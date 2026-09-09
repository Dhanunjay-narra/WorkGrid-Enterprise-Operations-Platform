export const CommWebhooksItemGqlTypeDefs = `
  type CommWebhooksItem {
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
    getCommWebhooksItem(id: ID!): CommWebhooksItem
    listCommWebhooksItems(tenantId: String!, limit: Int): [CommWebhooksItem!]!
  }

  extend type Mutation {
    createCommWebhooksItem(tenantId: String!, code: String!, name: String!): CommWebhooksItem!
    deleteCommWebhooksItem(id: ID!): Boolean!
  }
`;

export const CommWebhooksItemGqlResolvers = {
  Query: {
    getCommWebhooksItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommWebhooksItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
