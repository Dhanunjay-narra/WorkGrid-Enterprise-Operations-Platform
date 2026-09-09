export const AiPromptsAssignmentGqlTypeDefs = `
  type AiPromptsAssignment {
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
    getAiPromptsAssignment(id: ID!): AiPromptsAssignment
    listAiPromptsAssignments(tenantId: String!, limit: Int): [AiPromptsAssignment!]!
  }

  extend type Mutation {
    createAiPromptsAssignment(tenantId: String!, code: String!, name: String!): AiPromptsAssignment!
    deleteAiPromptsAssignment(id: ID!): Boolean!
  }
`;

export const AiPromptsAssignmentGqlResolvers = {
  Query: {
    getAiPromptsAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiPromptsAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
