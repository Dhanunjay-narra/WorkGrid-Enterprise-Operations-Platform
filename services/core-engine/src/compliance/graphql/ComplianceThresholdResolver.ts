export const ComplianceThresholdGqlTypeDefs = `
  type ComplianceThreshold {
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
    getComplianceThreshold(id: ID!): ComplianceThreshold
    listComplianceThresholds(tenantId: String!, limit: Int): [ComplianceThreshold!]!
  }

  extend type Mutation {
    createComplianceThreshold(tenantId: String!, code: String!, name: String!): ComplianceThreshold!
    deleteComplianceThreshold(id: ID!): Boolean!
  }
`;

export const ComplianceThresholdGqlResolvers = {
  Query: {
    getComplianceThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ComplianceThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
