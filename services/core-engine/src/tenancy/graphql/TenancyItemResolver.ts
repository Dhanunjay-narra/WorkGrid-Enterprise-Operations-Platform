export const TenancyItemGqlTypeDefs = `
  type TenancyItem {
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
    getTenancyItem(id: ID!): TenancyItem
    listTenancyItems(tenantId: String!, limit: Int): [TenancyItem!]!
  }

  extend type Mutation {
    createTenancyItem(tenantId: String!, code: String!, name: String!): TenancyItem!
    deleteTenancyItem(id: ID!): Boolean!
  }
`;

export const TenancyItemGqlResolvers = {
  Query: {
    getTenancyItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "TenancyItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
