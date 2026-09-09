export const CompliancePolicyGqlTypeDefs = `
  type CompliancePolicy {
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
    getCompliancePolicy(id: ID!): CompliancePolicy
    listCompliancePolicys(tenantId: String!, limit: Int): [CompliancePolicy!]!
  }

  extend type Mutation {
    createCompliancePolicy(tenantId: String!, code: String!, name: String!): CompliancePolicy!
    deleteCompliancePolicy(id: ID!): Boolean!
  }
`;

export const CompliancePolicyGqlResolvers = {
  Query: {
    getCompliancePolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CompliancePolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
