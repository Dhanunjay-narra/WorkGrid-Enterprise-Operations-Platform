export const ProjectTasksScheduleGqlTypeDefs = `
  type ProjectTasksSchedule {
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
    getProjectTasksSchedule(id: ID!): ProjectTasksSchedule
    listProjectTasksSchedules(tenantId: String!, limit: Int): [ProjectTasksSchedule!]!
  }

  extend type Mutation {
    createProjectTasksSchedule(tenantId: String!, code: String!, name: String!): ProjectTasksSchedule!
    deleteProjectTasksSchedule(id: ID!): Boolean!
  }
`;

export const ProjectTasksScheduleGqlResolvers = {
  Query: {
    getProjectTasksSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectTasksSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
