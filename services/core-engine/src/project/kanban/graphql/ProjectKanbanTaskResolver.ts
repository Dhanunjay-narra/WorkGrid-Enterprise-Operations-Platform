export const ProjectKanbanTaskGqlTypeDefs = `
  type ProjectKanbanTask {
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
    getProjectKanbanTask(id: ID!): ProjectKanbanTask
    listProjectKanbanTasks(tenantId: String!, limit: Int): [ProjectKanbanTask!]!
  }

  extend type Mutation {
    createProjectKanbanTask(tenantId: String!, code: String!, name: String!): ProjectKanbanTask!
    deleteProjectKanbanTask(id: ID!): Boolean!
  }
`;

export const ProjectKanbanTaskGqlResolvers = {
  Query: {
    getProjectKanbanTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectKanbanTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
