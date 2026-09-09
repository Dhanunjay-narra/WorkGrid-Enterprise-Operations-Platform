export const ProjectTasksConfigGqlTypeDefs = `
  type ProjectTasksConfig {
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
    getProjectTasksConfig(id: ID!): ProjectTasksConfig
    listProjectTasksConfigs(tenantId: String!, limit: Int): [ProjectTasksConfig!]!
  }

  extend type Mutation {
    createProjectTasksConfig(tenantId: String!, code: String!, name: String!): ProjectTasksConfig!
    deleteProjectTasksConfig(id: ID!): Boolean!
  }
`;

export const ProjectTasksConfigGqlResolvers = {
  Query: {
    getProjectTasksConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectTasksConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
