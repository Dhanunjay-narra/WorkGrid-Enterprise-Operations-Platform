export const ProjectTasksEventGqlTypeDefs = `
  type ProjectTasksEvent {
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
    getProjectTasksEvent(id: ID!): ProjectTasksEvent
    listProjectTasksEvents(tenantId: String!, limit: Int): [ProjectTasksEvent!]!
  }

  extend type Mutation {
    createProjectTasksEvent(tenantId: String!, code: String!, name: String!): ProjectTasksEvent!
    deleteProjectTasksEvent(id: ID!): Boolean!
  }
`;

export const ProjectTasksEventGqlResolvers = {
  Query: {
    getProjectTasksEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectTasksEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
