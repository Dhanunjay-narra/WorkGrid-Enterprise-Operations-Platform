export const AuditRecordGqlTypeDefs = `
  type AuditRecord {
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
    getAuditRecord(id: ID!): AuditRecord
    listAuditRecords(tenantId: String!, limit: Int): [AuditRecord!]!
  }

  extend type Mutation {
    createAuditRecord(tenantId: String!, code: String!, name: String!): AuditRecord!
    deleteAuditRecord(id: ID!): Boolean!
  }
`;

export const AuditRecordGqlResolvers = {
  Query: {
    getAuditRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuditRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
