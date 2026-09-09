export const IntOauthEntryGqlTypeDefs = `
  type IntOauthEntry {
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
    getIntOauthEntry(id: ID!): IntOauthEntry
    listIntOauthEntrys(tenantId: String!, limit: Int): [IntOauthEntry!]!
  }

  extend type Mutation {
    createIntOauthEntry(tenantId: String!, code: String!, name: String!): IntOauthEntry!
    deleteIntOauthEntry(id: ID!): Boolean!
  }
`;

export const IntOauthEntryGqlResolvers = {
  Query: {
    getIntOauthEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntOauthEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
