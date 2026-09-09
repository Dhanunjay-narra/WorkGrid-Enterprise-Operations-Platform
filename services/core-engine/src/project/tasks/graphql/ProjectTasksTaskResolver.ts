export const ProjectTasksTaskGqlTypeDefs = `
  type ProjectTasksTask {
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
    getProjectTasksTask(id: ID!): ProjectTasksTask
    listProjectTasksTasks(tenantId: String!, limit: Int): [ProjectTasksTask!]!
  }

  extend type Mutation {
    createProjectTasksTask(tenantId: String!, code: String!, name: String!): ProjectTasksTask!
    deleteProjectTasksTask(id: ID!): Boolean!
  }
`;

export const ProjectTasksTaskGqlResolvers = {
  Query: {
    getProjectTasksTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectTasksTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
