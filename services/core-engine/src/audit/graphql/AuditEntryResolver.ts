export const AuditEntryGqlTypeDefs = `
  type AuditEntry {
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
    getAuditEntry(id: ID!): AuditEntry
    listAuditEntrys(tenantId: String!, limit: Int): [AuditEntry!]!
  }

  extend type Mutation {
    createAuditEntry(tenantId: String!, code: String!, name: String!): AuditEntry!
    deleteAuditEntry(id: ID!): Boolean!
  }
`;

export const AuditEntryGqlResolvers = {
  Query: {
    getAuditEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuditEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
