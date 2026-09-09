export const ProjectGanttQueueGqlTypeDefs = `
  type ProjectGanttQueue {
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
    getProjectGanttQueue(id: ID!): ProjectGanttQueue
    listProjectGanttQueues(tenantId: String!, limit: Int): [ProjectGanttQueue!]!
  }

  extend type Mutation {
    createProjectGanttQueue(tenantId: String!, code: String!, name: String!): ProjectGanttQueue!
    deleteProjectGanttQueue(id: ID!): Boolean!
  }
`;

export const ProjectGanttQueueGqlResolvers = {
  Query: {
    getProjectGanttQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectGanttQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
