export const ProjectTasksThresholdGqlTypeDefs = `
  type ProjectTasksThreshold {
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
    getProjectTasksThreshold(id: ID!): ProjectTasksThreshold
    listProjectTasksThresholds(tenantId: String!, limit: Int): [ProjectTasksThreshold!]!
  }

  extend type Mutation {
    createProjectTasksThreshold(tenantId: String!, code: String!, name: String!): ProjectTasksThreshold!
    deleteProjectTasksThreshold(id: ID!): Boolean!
  }
`;

export const ProjectTasksThresholdGqlResolvers = {
  Query: {
    getProjectTasksThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectTasksThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
