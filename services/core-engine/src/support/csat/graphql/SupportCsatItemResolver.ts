export const SupportCsatItemGqlTypeDefs = `
  type SupportCsatItem {
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
    getSupportCsatItem(id: ID!): SupportCsatItem
    listSupportCsatItems(tenantId: String!, limit: Int): [SupportCsatItem!]!
  }

  extend type Mutation {
    createSupportCsatItem(tenantId: String!, code: String!, name: String!): SupportCsatItem!
    deleteSupportCsatItem(id: ID!): Boolean!
  }
`;

export const SupportCsatItemGqlResolvers = {
  Query: {
    getSupportCsatItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportCsatItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
