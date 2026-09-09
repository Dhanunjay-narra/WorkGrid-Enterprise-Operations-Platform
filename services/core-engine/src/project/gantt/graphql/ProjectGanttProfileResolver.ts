export const ProjectGanttProfileGqlTypeDefs = `
  type ProjectGanttProfile {
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
    getProjectGanttProfile(id: ID!): ProjectGanttProfile
    listProjectGanttProfiles(tenantId: String!, limit: Int): [ProjectGanttProfile!]!
  }

  extend type Mutation {
    createProjectGanttProfile(tenantId: String!, code: String!, name: String!): ProjectGanttProfile!
    deleteProjectGanttProfile(id: ID!): Boolean!
  }
`;

export const ProjectGanttProfileGqlResolvers = {
  Query: {
    getProjectGanttProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectGanttProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
