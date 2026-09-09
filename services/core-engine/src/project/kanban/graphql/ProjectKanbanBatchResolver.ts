export const ProjectKanbanBatchGqlTypeDefs = `
  type ProjectKanbanBatch {
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
    getProjectKanbanBatch(id: ID!): ProjectKanbanBatch
    listProjectKanbanBatchs(tenantId: String!, limit: Int): [ProjectKanbanBatch!]!
  }

  extend type Mutation {
    createProjectKanbanBatch(tenantId: String!, code: String!, name: String!): ProjectKanbanBatch!
    deleteProjectKanbanBatch(id: ID!): Boolean!
  }
`;

export const ProjectKanbanBatchGqlResolvers = {
  Query: {
    getProjectKanbanBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectKanbanBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
