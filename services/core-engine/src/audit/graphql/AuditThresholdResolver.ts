export const AuditThresholdGqlTypeDefs = `
  type AuditThreshold {
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
    getAuditThreshold(id: ID!): AuditThreshold
    listAuditThresholds(tenantId: String!, limit: Int): [AuditThreshold!]!
  }

  extend type Mutation {
    createAuditThreshold(tenantId: String!, code: String!, name: String!): AuditThreshold!
    deleteAuditThreshold(id: ID!): Boolean!
  }
`;

export const AuditThresholdGqlResolvers = {
  Query: {
    getAuditThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuditThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
