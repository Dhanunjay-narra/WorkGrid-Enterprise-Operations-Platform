export const ProjectTasksStateGqlTypeDefs = `
  type ProjectTasksState {
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
    getProjectTasksState(id: ID!): ProjectTasksState
    listProjectTasksStates(tenantId: String!, limit: Int): [ProjectTasksState!]!
  }

  extend type Mutation {
    createProjectTasksState(tenantId: String!, code: String!, name: String!): ProjectTasksState!
    deleteProjectTasksState(id: ID!): Boolean!
  }
`;

export const ProjectTasksStateGqlResolvers = {
  Query: {
    getProjectTasksState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectTasksState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
