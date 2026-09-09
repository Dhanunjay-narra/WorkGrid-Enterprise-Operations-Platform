export const ProjectGanttStateGqlTypeDefs = `
  type ProjectGanttState {
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
    getProjectGanttState(id: ID!): ProjectGanttState
    listProjectGanttStates(tenantId: String!, limit: Int): [ProjectGanttState!]!
  }

  extend type Mutation {
    createProjectGanttState(tenantId: String!, code: String!, name: String!): ProjectGanttState!
    deleteProjectGanttState(id: ID!): Boolean!
  }
`;

export const ProjectGanttStateGqlResolvers = {
  Query: {
    getProjectGanttState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectGanttState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
