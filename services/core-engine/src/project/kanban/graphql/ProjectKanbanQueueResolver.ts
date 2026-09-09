export const ProjectKanbanQueueGqlTypeDefs = `
  type ProjectKanbanQueue {
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
    getProjectKanbanQueue(id: ID!): ProjectKanbanQueue
    listProjectKanbanQueues(tenantId: String!, limit: Int): [ProjectKanbanQueue!]!
  }

  extend type Mutation {
    createProjectKanbanQueue(tenantId: String!, code: String!, name: String!): ProjectKanbanQueue!
    deleteProjectKanbanQueue(id: ID!): Boolean!
  }
`;

export const ProjectKanbanQueueGqlResolvers = {
  Query: {
    getProjectKanbanQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectKanbanQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
