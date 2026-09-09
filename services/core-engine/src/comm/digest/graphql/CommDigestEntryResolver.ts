export const CommDigestEntryGqlTypeDefs = `
  type CommDigestEntry {
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
    getCommDigestEntry(id: ID!): CommDigestEntry
    listCommDigestEntrys(tenantId: String!, limit: Int): [CommDigestEntry!]!
  }

  extend type Mutation {
    createCommDigestEntry(tenantId: String!, code: String!, name: String!): CommDigestEntry!
    deleteCommDigestEntry(id: ID!): Boolean!
  }
`;

export const CommDigestEntryGqlResolvers = {
  Query: {
    getCommDigestEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommDigestEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
