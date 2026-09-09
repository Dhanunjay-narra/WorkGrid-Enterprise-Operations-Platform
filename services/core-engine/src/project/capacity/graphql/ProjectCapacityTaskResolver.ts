export const ProjectCapacityTaskGqlTypeDefs = `
  type ProjectCapacityTask {
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
    getProjectCapacityTask(id: ID!): ProjectCapacityTask
    listProjectCapacityTasks(tenantId: String!, limit: Int): [ProjectCapacityTask!]!
  }

  extend type Mutation {
    createProjectCapacityTask(tenantId: String!, code: String!, name: String!): ProjectCapacityTask!
    deleteProjectCapacityTask(id: ID!): Boolean!
  }
`;

export const ProjectCapacityTaskGqlResolvers = {
  Query: {
    getProjectCapacityTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectCapacityTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
