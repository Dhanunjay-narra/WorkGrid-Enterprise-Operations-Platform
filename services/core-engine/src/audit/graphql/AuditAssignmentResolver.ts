export const AuditAssignmentGqlTypeDefs = `
  type AuditAssignment {
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
    getAuditAssignment(id: ID!): AuditAssignment
    listAuditAssignments(tenantId: String!, limit: Int): [AuditAssignment!]!
  }

  extend type Mutation {
    createAuditAssignment(tenantId: String!, code: String!, name: String!): AuditAssignment!
    deleteAuditAssignment(id: ID!): Boolean!
  }
`;

export const AuditAssignmentGqlResolvers = {
  Query: {
    getAuditAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuditAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
