export const ProjectGanttTaskGqlTypeDefs = `
  type ProjectGanttTask {
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
    getProjectGanttTask(id: ID!): ProjectGanttTask
    listProjectGanttTasks(tenantId: String!, limit: Int): [ProjectGanttTask!]!
  }

  extend type Mutation {
    createProjectGanttTask(tenantId: String!, code: String!, name: String!): ProjectGanttTask!
    deleteProjectGanttTask(id: ID!): Boolean!
  }
`;

export const ProjectGanttTaskGqlResolvers = {
  Query: {
    getProjectGanttTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectGanttTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
