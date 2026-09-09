export const ProjectEpicsScheduleGqlTypeDefs = `
  type ProjectEpicsSchedule {
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
    getProjectEpicsSchedule(id: ID!): ProjectEpicsSchedule
    listProjectEpicsSchedules(tenantId: String!, limit: Int): [ProjectEpicsSchedule!]!
  }

  extend type Mutation {
    createProjectEpicsSchedule(tenantId: String!, code: String!, name: String!): ProjectEpicsSchedule!
    deleteProjectEpicsSchedule(id: ID!): Boolean!
  }
`;

export const ProjectEpicsScheduleGqlResolvers = {
  Query: {
    getProjectEpicsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectEpicsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
