export const ComplianceSessionGqlTypeDefs = `
  type ComplianceSession {
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
    getComplianceSession(id: ID!): ComplianceSession
    listComplianceSessions(tenantId: String!, limit: Int): [ComplianceSession!]!
  }

  extend type Mutation {
    createComplianceSession(tenantId: String!, code: String!, name: String!): ComplianceSession!
    deleteComplianceSession(id: ID!): Boolean!
  }
`;

export const ComplianceSessionGqlResolvers = {
  Query: {
    getComplianceSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ComplianceSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
