export const AiAgentsAssignmentGqlTypeDefs = `
  type AiAgentsAssignment {
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
    getAiAgentsAssignment(id: ID!): AiAgentsAssignment
    listAiAgentsAssignments(tenantId: String!, limit: Int): [AiAgentsAssignment!]!
  }

  extend type Mutation {
    createAiAgentsAssignment(tenantId: String!, code: String!, name: String!): AiAgentsAssignment!
    deleteAiAgentsAssignment(id: ID!): Boolean!
  }
`;

export const AiAgentsAssignmentGqlResolvers = {
  Query: {
    getAiAgentsAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiAgentsAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
