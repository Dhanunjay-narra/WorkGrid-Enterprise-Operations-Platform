export const SupportSlaItemGqlTypeDefs = `
  type SupportSlaItem {
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
    getSupportSlaItem(id: ID!): SupportSlaItem
    listSupportSlaItems(tenantId: String!, limit: Int): [SupportSlaItem!]!
  }

  extend type Mutation {
    createSupportSlaItem(tenantId: String!, code: String!, name: String!): SupportSlaItem!
    deleteSupportSlaItem(id: ID!): Boolean!
  }
`;

export const SupportSlaItemGqlResolvers = {
  Query: {
    getSupportSlaItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSlaItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
