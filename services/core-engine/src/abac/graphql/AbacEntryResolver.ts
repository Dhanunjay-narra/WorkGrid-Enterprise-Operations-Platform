export const AbacEntryGqlTypeDefs = `
  type AbacEntry {
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
    getAbacEntry(id: ID!): AbacEntry
    listAbacEntrys(tenantId: String!, limit: Int): [AbacEntry!]!
  }

  extend type Mutation {
    createAbacEntry(tenantId: String!, code: String!, name: String!): AbacEntry!
    deleteAbacEntry(id: ID!): Boolean!
  }
`;

export const AbacEntryGqlResolvers = {
  Query: {
    getAbacEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AbacEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
