export const IntMappingsEntryGqlTypeDefs = `
  type IntMappingsEntry {
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
    getIntMappingsEntry(id: ID!): IntMappingsEntry
    listIntMappingsEntrys(tenantId: String!, limit: Int): [IntMappingsEntry!]!
  }

  extend type Mutation {
    createIntMappingsEntry(tenantId: String!, code: String!, name: String!): IntMappingsEntry!
    deleteIntMappingsEntry(id: ID!): Boolean!
  }
`;

export const IntMappingsEntryGqlResolvers = {
  Query: {
    getIntMappingsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntMappingsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
