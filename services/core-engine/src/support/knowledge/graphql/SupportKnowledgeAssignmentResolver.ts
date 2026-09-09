export const SupportKnowledgeAssignmentGqlTypeDefs = `
  type SupportKnowledgeAssignment {
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
    getSupportKnowledgeAssignment(id: ID!): SupportKnowledgeAssignment
    listSupportKnowledgeAssignments(tenantId: String!, limit: Int): [SupportKnowledgeAssignment!]!
  }

  extend type Mutation {
    createSupportKnowledgeAssignment(tenantId: String!, code: String!, name: String!): SupportKnowledgeAssignment!
    deleteSupportKnowledgeAssignment(id: ID!): Boolean!
  }
`;

export const SupportKnowledgeAssignmentGqlResolvers = {
  Query: {
    getSupportKnowledgeAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportKnowledgeAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
