export const SupportTicketsAssignmentGqlTypeDefs = `
  type SupportTicketsAssignment {
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
    getSupportTicketsAssignment(id: ID!): SupportTicketsAssignment
    listSupportTicketsAssignments(tenantId: String!, limit: Int): [SupportTicketsAssignment!]!
  }

  extend type Mutation {
    createSupportTicketsAssignment(tenantId: String!, code: String!, name: String!): SupportTicketsAssignment!
    deleteSupportTicketsAssignment(id: ID!): Boolean!
  }
`;

export const SupportTicketsAssignmentGqlResolvers = {
  Query: {
    getSupportTicketsAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportTicketsAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
