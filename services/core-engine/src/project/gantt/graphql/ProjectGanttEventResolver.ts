export const ProjectGanttEventGqlTypeDefs = `
  type ProjectGanttEvent {
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
    getProjectGanttEvent(id: ID!): ProjectGanttEvent
    listProjectGanttEvents(tenantId: String!, limit: Int): [ProjectGanttEvent!]!
  }

  extend type Mutation {
    createProjectGanttEvent(tenantId: String!, code: String!, name: String!): ProjectGanttEvent!
    deleteProjectGanttEvent(id: ID!): Boolean!
  }
`;

export const ProjectGanttEventGqlResolvers = {
  Query: {
    getProjectGanttEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectGanttEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
