export const ProjectGanttConfigGqlTypeDefs = `
  type ProjectGanttConfig {
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
    getProjectGanttConfig(id: ID!): ProjectGanttConfig
    listProjectGanttConfigs(tenantId: String!, limit: Int): [ProjectGanttConfig!]!
  }

  extend type Mutation {
    createProjectGanttConfig(tenantId: String!, code: String!, name: String!): ProjectGanttConfig!
    deleteProjectGanttConfig(id: ID!): Boolean!
  }
`;

export const ProjectGanttConfigGqlResolvers = {
  Query: {
    getProjectGanttConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectGanttConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
