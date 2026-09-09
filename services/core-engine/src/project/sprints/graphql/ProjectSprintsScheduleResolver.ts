export const ProjectSprintsScheduleGqlTypeDefs = `
  type ProjectSprintsSchedule {
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
    getProjectSprintsSchedule(id: ID!): ProjectSprintsSchedule
    listProjectSprintsSchedules(tenantId: String!, limit: Int): [ProjectSprintsSchedule!]!
  }

  extend type Mutation {
    createProjectSprintsSchedule(tenantId: String!, code: String!, name: String!): ProjectSprintsSchedule!
    deleteProjectSprintsSchedule(id: ID!): Boolean!
  }
`;

export const ProjectSprintsScheduleGqlResolvers = {
  Query: {
    getProjectSprintsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectSprintsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
