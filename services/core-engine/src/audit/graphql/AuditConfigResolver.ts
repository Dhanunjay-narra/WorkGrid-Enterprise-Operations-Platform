export const AuditConfigGqlTypeDefs = `
  type AuditConfig {
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
    getAuditConfig(id: ID!): AuditConfig
    listAuditConfigs(tenantId: String!, limit: Int): [AuditConfig!]!
  }

  extend type Mutation {
    createAuditConfig(tenantId: String!, code: String!, name: String!): AuditConfig!
    deleteAuditConfig(id: ID!): Boolean!
  }
`;

export const AuditConfigGqlResolvers = {
  Query: {
    getAuditConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuditConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
