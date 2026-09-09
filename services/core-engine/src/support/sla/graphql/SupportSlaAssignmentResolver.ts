export const SupportSlaAssignmentGqlTypeDefs = `
  type SupportSlaAssignment {
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
    getSupportSlaAssignment(id: ID!): SupportSlaAssignment
    listSupportSlaAssignments(tenantId: String!, limit: Int): [SupportSlaAssignment!]!
  }

  extend type Mutation {
    createSupportSlaAssignment(tenantId: String!, code: String!, name: String!): SupportSlaAssignment!
    deleteSupportSlaAssignment(id: ID!): Boolean!
  }
`;

export const SupportSlaAssignmentGqlResolvers = {
  Query: {
    getSupportSlaAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSlaAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
