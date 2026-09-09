export const ProjectKanbanEventGqlTypeDefs = `
  type ProjectKanbanEvent {
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
    getProjectKanbanEvent(id: ID!): ProjectKanbanEvent
    listProjectKanbanEvents(tenantId: String!, limit: Int): [ProjectKanbanEvent!]!
  }

  extend type Mutation {
    createProjectKanbanEvent(tenantId: String!, code: String!, name: String!): ProjectKanbanEvent!
    deleteProjectKanbanEvent(id: ID!): Boolean!
  }
`;

export const ProjectKanbanEventGqlResolvers = {
  Query: {
    getProjectKanbanEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectKanbanEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
