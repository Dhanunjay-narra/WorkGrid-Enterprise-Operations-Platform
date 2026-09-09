export const ComplianceConfigGqlTypeDefs = `
  type ComplianceConfig {
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
    getComplianceConfig(id: ID!): ComplianceConfig
    listComplianceConfigs(tenantId: String!, limit: Int): [ComplianceConfig!]!
  }

  extend type Mutation {
    createComplianceConfig(tenantId: String!, code: String!, name: String!): ComplianceConfig!
    deleteComplianceConfig(id: ID!): Boolean!
  }
`;

export const ComplianceConfigGqlResolvers = {
  Query: {
    getComplianceConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ComplianceConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
