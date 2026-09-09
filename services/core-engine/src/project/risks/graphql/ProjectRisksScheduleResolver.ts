export const ProjectRisksScheduleGqlTypeDefs = `
  type ProjectRisksSchedule {
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
    getProjectRisksSchedule(id: ID!): ProjectRisksSchedule
    listProjectRisksSchedules(tenantId: String!, limit: Int): [ProjectRisksSchedule!]!
  }

  extend type Mutation {
    createProjectRisksSchedule(tenantId: String!, code: String!, name: String!): ProjectRisksSchedule!
    deleteProjectRisksSchedule(id: ID!): Boolean!
  }
`;

export const ProjectRisksScheduleGqlResolvers = {
  Query: {
    getProjectRisksSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectRisksSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
