export const SupportQueuesAssignmentGqlTypeDefs = `
  type SupportQueuesAssignment {
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
    getSupportQueuesAssignment(id: ID!): SupportQueuesAssignment
    listSupportQueuesAssignments(tenantId: String!, limit: Int): [SupportQueuesAssignment!]!
  }

  extend type Mutation {
    createSupportQueuesAssignment(tenantId: String!, code: String!, name: String!): SupportQueuesAssignment!
    deleteSupportQueuesAssignment(id: ID!): Boolean!
  }
`;

export const SupportQueuesAssignmentGqlResolvers = {
  Query: {
    getSupportQueuesAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportQueuesAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
