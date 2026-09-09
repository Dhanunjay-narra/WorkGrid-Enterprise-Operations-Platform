export const ProjectWorkspacesScheduleGqlTypeDefs = `
  type ProjectWorkspacesSchedule {
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
    getProjectWorkspacesSchedule(id: ID!): ProjectWorkspacesSchedule
    listProjectWorkspacesSchedules(tenantId: String!, limit: Int): [ProjectWorkspacesSchedule!]!
  }

  extend type Mutation {
    createProjectWorkspacesSchedule(tenantId: String!, code: String!, name: String!): ProjectWorkspacesSchedule!
    deleteProjectWorkspacesSchedule(id: ID!): Boolean!
  }
`;

export const ProjectWorkspacesScheduleGqlResolvers = {
  Query: {
    getProjectWorkspacesSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectWorkspacesSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
