export const CommCallsEntryGqlTypeDefs = `
  type CommCallsEntry {
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
    getCommCallsEntry(id: ID!): CommCallsEntry
    listCommCallsEntrys(tenantId: String!, limit: Int): [CommCallsEntry!]!
  }

  extend type Mutation {
    createCommCallsEntry(tenantId: String!, code: String!, name: String!): CommCallsEntry!
    deleteCommCallsEntry(id: ID!): Boolean!
  }
`;

export const CommCallsEntryGqlResolvers = {
  Query: {
    getCommCallsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommCallsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
