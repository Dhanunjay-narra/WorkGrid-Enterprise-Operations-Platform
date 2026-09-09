export const ProjectKanbanSummaryGqlTypeDefs = `
  type ProjectKanbanSummary {
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
    getProjectKanbanSummary(id: ID!): ProjectKanbanSummary
    listProjectKanbanSummarys(tenantId: String!, limit: Int): [ProjectKanbanSummary!]!
  }

  extend type Mutation {
    createProjectKanbanSummary(tenantId: String!, code: String!, name: String!): ProjectKanbanSummary!
    deleteProjectKanbanSummary(id: ID!): Boolean!
  }
`;

export const ProjectKanbanSummaryGqlResolvers = {
  Query: {
    getProjectKanbanSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectKanbanSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
