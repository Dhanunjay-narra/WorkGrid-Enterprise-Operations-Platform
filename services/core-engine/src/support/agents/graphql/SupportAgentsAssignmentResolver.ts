export const SupportAgentsAssignmentGqlTypeDefs = `
  type SupportAgentsAssignment {
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
    getSupportAgentsAssignment(id: ID!): SupportAgentsAssignment
    listSupportAgentsAssignments(tenantId: String!, limit: Int): [SupportAgentsAssignment!]!
  }

  extend type Mutation {
    createSupportAgentsAssignment(tenantId: String!, code: String!, name: String!): SupportAgentsAssignment!
    deleteSupportAgentsAssignment(id: ID!): Boolean!
  }
`;

export const SupportAgentsAssignmentGqlResolvers = {
  Query: {
    getSupportAgentsAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportAgentsAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
