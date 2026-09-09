export const ComplianceProfileGqlTypeDefs = `
  type ComplianceProfile {
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
    getComplianceProfile(id: ID!): ComplianceProfile
    listComplianceProfiles(tenantId: String!, limit: Int): [ComplianceProfile!]!
  }

  extend type Mutation {
    createComplianceProfile(tenantId: String!, code: String!, name: String!): ComplianceProfile!
    deleteComplianceProfile(id: ID!): Boolean!
  }
`;

export const ComplianceProfileGqlResolvers = {
  Query: {
    getComplianceProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ComplianceProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
