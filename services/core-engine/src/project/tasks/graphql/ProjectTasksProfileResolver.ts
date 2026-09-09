export const ProjectTasksProfileGqlTypeDefs = `
  type ProjectTasksProfile {
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
    getProjectTasksProfile(id: ID!): ProjectTasksProfile
    listProjectTasksProfiles(tenantId: String!, limit: Int): [ProjectTasksProfile!]!
  }

  extend type Mutation {
    createProjectTasksProfile(tenantId: String!, code: String!, name: String!): ProjectTasksProfile!
    deleteProjectTasksProfile(id: ID!): Boolean!
  }
`;

export const ProjectTasksProfileGqlResolvers = {
  Query: {
    getProjectTasksProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectTasksProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
