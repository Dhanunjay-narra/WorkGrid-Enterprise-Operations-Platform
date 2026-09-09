export const IdentityEntryGqlTypeDefs = `
  type IdentityEntry {
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
    getIdentityEntry(id: ID!): IdentityEntry
    listIdentityEntrys(tenantId: String!, limit: Int): [IdentityEntry!]!
  }

  extend type Mutation {
    createIdentityEntry(tenantId: String!, code: String!, name: String!): IdentityEntry!
    deleteIdentityEntry(id: ID!): Boolean!
  }
`;

export const IdentityEntryGqlResolvers = {
  Query: {
    getIdentityEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IdentityEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
