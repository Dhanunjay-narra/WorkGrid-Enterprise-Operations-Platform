export const ProjectKanbanThresholdGqlTypeDefs = `
  type ProjectKanbanThreshold {
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
    getProjectKanbanThreshold(id: ID!): ProjectKanbanThreshold
    listProjectKanbanThresholds(tenantId: String!, limit: Int): [ProjectKanbanThreshold!]!
  }

  extend type Mutation {
    createProjectKanbanThreshold(tenantId: String!, code: String!, name: String!): ProjectKanbanThreshold!
    deleteProjectKanbanThreshold(id: ID!): Boolean!
  }
`;

export const ProjectKanbanThresholdGqlResolvers = {
  Query: {
    getProjectKanbanThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectKanbanThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
