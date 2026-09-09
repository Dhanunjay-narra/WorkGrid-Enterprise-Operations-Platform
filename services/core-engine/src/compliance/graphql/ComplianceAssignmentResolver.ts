export const ComplianceAssignmentGqlTypeDefs = `
  type ComplianceAssignment {
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
    getComplianceAssignment(id: ID!): ComplianceAssignment
    listComplianceAssignments(tenantId: String!, limit: Int): [ComplianceAssignment!]!
  }

  extend type Mutation {
    createComplianceAssignment(tenantId: String!, code: String!, name: String!): ComplianceAssignment!
    deleteComplianceAssignment(id: ID!): Boolean!
  }
`;

export const ComplianceAssignmentGqlResolvers = {
  Query: {
    getComplianceAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ComplianceAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
