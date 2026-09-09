export const AuditBatchGqlTypeDefs = `
  type AuditBatch {
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
    getAuditBatch(id: ID!): AuditBatch
    listAuditBatchs(tenantId: String!, limit: Int): [AuditBatch!]!
  }

  extend type Mutation {
    createAuditBatch(tenantId: String!, code: String!, name: String!): AuditBatch!
    deleteAuditBatch(id: ID!): Boolean!
  }
`;

export const AuditBatchGqlResolvers = {
  Query: {
    getAuditBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuditBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
