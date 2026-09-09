export const ProjectKanbanScheduleGqlTypeDefs = `
  type ProjectKanbanSchedule {
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
    getProjectKanbanSchedule(id: ID!): ProjectKanbanSchedule
    listProjectKanbanSchedules(tenantId: String!, limit: Int): [ProjectKanbanSchedule!]!
  }

  extend type Mutation {
    createProjectKanbanSchedule(tenantId: String!, code: String!, name: String!): ProjectKanbanSchedule!
    deleteProjectKanbanSchedule(id: ID!): Boolean!
  }
`;

export const ProjectKanbanScheduleGqlResolvers = {
  Query: {
    getProjectKanbanSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectKanbanSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
