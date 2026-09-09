export const SecurityAssignmentGqlTypeDefs = `
  type SecurityAssignment {
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
    getSecurityAssignment(id: ID!): SecurityAssignment
    listSecurityAssignments(tenantId: String!, limit: Int): [SecurityAssignment!]!
  }

  extend type Mutation {
    createSecurityAssignment(tenantId: String!, code: String!, name: String!): SecurityAssignment!
    deleteSecurityAssignment(id: ID!): Boolean!
  }
`;

export const SecurityAssignmentGqlResolvers = {
  Query: {
    getSecurityAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SecurityAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
