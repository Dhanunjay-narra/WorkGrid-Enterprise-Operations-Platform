export const ProjectGanttScheduleGqlTypeDefs = `
  type ProjectGanttSchedule {
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
    getProjectGanttSchedule(id: ID!): ProjectGanttSchedule
    listProjectGanttSchedules(tenantId: String!, limit: Int): [ProjectGanttSchedule!]!
  }

  extend type Mutation {
    createProjectGanttSchedule(tenantId: String!, code: String!, name: String!): ProjectGanttSchedule!
    deleteProjectGanttSchedule(id: ID!): Boolean!
  }
`;

export const ProjectGanttScheduleGqlResolvers = {
  Query: {
    getProjectGanttSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectGanttSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
