export const ComplianceMappingGqlTypeDefs = `
  type ComplianceMapping {
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
    getComplianceMapping(id: ID!): ComplianceMapping
    listComplianceMappings(tenantId: String!, limit: Int): [ComplianceMapping!]!
  }

  extend type Mutation {
    createComplianceMapping(tenantId: String!, code: String!, name: String!): ComplianceMapping!
    deleteComplianceMapping(id: ID!): Boolean!
  }
`;

export const ComplianceMappingGqlResolvers = {
  Query: {
    getComplianceMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ComplianceMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
