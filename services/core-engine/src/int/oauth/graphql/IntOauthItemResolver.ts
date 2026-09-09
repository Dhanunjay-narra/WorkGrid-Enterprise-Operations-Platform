export const IntOauthItemGqlTypeDefs = `
  type IntOauthItem {
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
    getIntOauthItem(id: ID!): IntOauthItem
    listIntOauthItems(tenantId: String!, limit: Int): [IntOauthItem!]!
  }

  extend type Mutation {
    createIntOauthItem(tenantId: String!, code: String!, name: String!): IntOauthItem!
    deleteIntOauthItem(id: ID!): Boolean!
  }
`;

export const IntOauthItemGqlResolvers = {
  Query: {
    getIntOauthItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntOauthItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
