export const CommDigestItemGqlTypeDefs = `
  type CommDigestItem {
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
    getCommDigestItem(id: ID!): CommDigestItem
    listCommDigestItems(tenantId: String!, limit: Int): [CommDigestItem!]!
  }

  extend type Mutation {
    createCommDigestItem(tenantId: String!, code: String!, name: String!): CommDigestItem!
    deleteCommDigestItem(id: ID!): Boolean!
  }
`;

export const CommDigestItemGqlResolvers = {
  Query: {
    getCommDigestItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommDigestItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
