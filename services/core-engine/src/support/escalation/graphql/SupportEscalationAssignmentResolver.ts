export const SupportEscalationAssignmentGqlTypeDefs = `
  type SupportEscalationAssignment {
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
    getSupportEscalationAssignment(id: ID!): SupportEscalationAssignment
    listSupportEscalationAssignments(tenantId: String!, limit: Int): [SupportEscalationAssignment!]!
  }

  extend type Mutation {
    createSupportEscalationAssignment(tenantId: String!, code: String!, name: String!): SupportEscalationAssignment!
    deleteSupportEscalationAssignment(id: ID!): Boolean!
  }
`;

export const SupportEscalationAssignmentGqlResolvers = {
  Query: {
    getSupportEscalationAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportEscalationAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
