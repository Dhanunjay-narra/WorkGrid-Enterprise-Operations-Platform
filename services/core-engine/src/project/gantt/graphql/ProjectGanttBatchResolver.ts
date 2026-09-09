export const ProjectGanttBatchGqlTypeDefs = `
  type ProjectGanttBatch {
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
    getProjectGanttBatch(id: ID!): ProjectGanttBatch
    listProjectGanttBatchs(tenantId: String!, limit: Int): [ProjectGanttBatch!]!
  }

  extend type Mutation {
    createProjectGanttBatch(tenantId: String!, code: String!, name: String!): ProjectGanttBatch!
    deleteProjectGanttBatch(id: ID!): Boolean!
  }
`;

export const ProjectGanttBatchGqlResolvers = {
  Query: {
    getProjectGanttBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectGanttBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
