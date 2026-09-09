export const ProjectCapacityScheduleGqlTypeDefs = `
  type ProjectCapacitySchedule {
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
    getProjectCapacitySchedule(id: ID!): ProjectCapacitySchedule
    listProjectCapacitySchedules(tenantId: String!, limit: Int): [ProjectCapacitySchedule!]!
  }

  extend type Mutation {
    createProjectCapacitySchedule(tenantId: String!, code: String!, name: String!): ProjectCapacitySchedule!
    deleteProjectCapacitySchedule(id: ID!): Boolean!
  }
`;

export const ProjectCapacityScheduleGqlResolvers = {
  Query: {
    getProjectCapacitySchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectCapacitySchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
