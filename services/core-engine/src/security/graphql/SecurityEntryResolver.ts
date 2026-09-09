export const SecurityEntryGqlTypeDefs = `
  type SecurityEntry {
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
    getSecurityEntry(id: ID!): SecurityEntry
    listSecurityEntrys(tenantId: String!, limit: Int): [SecurityEntry!]!
  }

  extend type Mutation {
    createSecurityEntry(tenantId: String!, code: String!, name: String!): SecurityEntry!
    deleteSecurityEntry(id: ID!): Boolean!
  }
`;

export const SecurityEntryGqlResolvers = {
  Query: {
    getSecurityEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SecurityEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
