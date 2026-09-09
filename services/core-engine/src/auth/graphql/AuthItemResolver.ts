export const AuthItemGqlTypeDefs = `
  type AuthItem {
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
    getAuthItem(id: ID!): AuthItem
    listAuthItems(tenantId: String!, limit: Int): [AuthItem!]!
  }

  extend type Mutation {
    createAuthItem(tenantId: String!, code: String!, name: String!): AuthItem!
    deleteAuthItem(id: ID!): Boolean!
  }
`;

export const AuthItemGqlResolvers = {
  Query: {
    getAuthItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuthItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
