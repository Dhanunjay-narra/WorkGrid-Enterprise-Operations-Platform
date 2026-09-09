export const AuditPolicyGqlTypeDefs = `
  type AuditPolicy {
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
    getAuditPolicy(id: ID!): AuditPolicy
    listAuditPolicys(tenantId: String!, limit: Int): [AuditPolicy!]!
  }

  extend type Mutation {
    createAuditPolicy(tenantId: String!, code: String!, name: String!): AuditPolicy!
    deleteAuditPolicy(id: ID!): Boolean!
  }
`;

export const AuditPolicyGqlResolvers = {
  Query: {
    getAuditPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuditPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
