export const AuthEntryGqlTypeDefs = `
  type AuthEntry {
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
    getAuthEntry(id: ID!): AuthEntry
    listAuthEntrys(tenantId: String!, limit: Int): [AuthEntry!]!
  }

  extend type Mutation {
    createAuthEntry(tenantId: String!, code: String!, name: String!): AuthEntry!
    deleteAuthEntry(id: ID!): Boolean!
  }
`;

export const AuthEntryGqlResolvers = {
  Query: {
    getAuthEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuthEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
