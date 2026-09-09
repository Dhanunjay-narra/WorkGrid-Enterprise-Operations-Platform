export const ProjectKanbanStateGqlTypeDefs = `
  type ProjectKanbanState {
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
    getProjectKanbanState(id: ID!): ProjectKanbanState
    listProjectKanbanStates(tenantId: String!, limit: Int): [ProjectKanbanState!]!
  }

  extend type Mutation {
    createProjectKanbanState(tenantId: String!, code: String!, name: String!): ProjectKanbanState!
    deleteProjectKanbanState(id: ID!): Boolean!
  }
`;

export const ProjectKanbanStateGqlResolvers = {
  Query: {
    getProjectKanbanState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectKanbanState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
