export const ProjectTasksQueueGqlTypeDefs = `
  type ProjectTasksQueue {
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
    getProjectTasksQueue(id: ID!): ProjectTasksQueue
    listProjectTasksQueues(tenantId: String!, limit: Int): [ProjectTasksQueue!]!
  }

  extend type Mutation {
    createProjectTasksQueue(tenantId: String!, code: String!, name: String!): ProjectTasksQueue!
    deleteProjectTasksQueue(id: ID!): Boolean!
  }
`;

export const ProjectTasksQueueGqlResolvers = {
  Query: {
    getProjectTasksQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectTasksQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
