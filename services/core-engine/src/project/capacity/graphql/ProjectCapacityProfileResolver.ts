export const ProjectCapacityProfileGqlTypeDefs = `
  type ProjectCapacityProfile {
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
    getProjectCapacityProfile(id: ID!): ProjectCapacityProfile
    listProjectCapacityProfiles(tenantId: String!, limit: Int): [ProjectCapacityProfile!]!
  }

  extend type Mutation {
    createProjectCapacityProfile(tenantId: String!, code: String!, name: String!): ProjectCapacityProfile!
    deleteProjectCapacityProfile(id: ID!): Boolean!
  }
`;

export const ProjectCapacityProfileGqlResolvers = {
  Query: {
    getProjectCapacityProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectCapacityProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
