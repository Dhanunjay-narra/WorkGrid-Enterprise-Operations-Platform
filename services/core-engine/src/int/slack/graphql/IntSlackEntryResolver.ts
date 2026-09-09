export const IntSlackEntryGqlTypeDefs = `
  type IntSlackEntry {
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
    getIntSlackEntry(id: ID!): IntSlackEntry
    listIntSlackEntrys(tenantId: String!, limit: Int): [IntSlackEntry!]!
  }

  extend type Mutation {
    createIntSlackEntry(tenantId: String!, code: String!, name: String!): IntSlackEntry!
    deleteIntSlackEntry(id: ID!): Boolean!
  }
`;

export const IntSlackEntryGqlResolvers = {
  Query: {
    getIntSlackEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSlackEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
