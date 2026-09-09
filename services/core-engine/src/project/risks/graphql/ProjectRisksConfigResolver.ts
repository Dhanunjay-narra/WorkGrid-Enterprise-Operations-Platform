export const ProjectRisksConfigGqlTypeDefs = `
  type ProjectRisksConfig {
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
    getProjectRisksConfig(id: ID!): ProjectRisksConfig
    listProjectRisksConfigs(tenantId: String!, limit: Int): [ProjectRisksConfig!]!
  }

  extend type Mutation {
    createProjectRisksConfig(tenantId: String!, code: String!, name: String!): ProjectRisksConfig!
    deleteProjectRisksConfig(id: ID!): Boolean!
  }
`;

export const ProjectRisksConfigGqlResolvers = {
  Query: {
    getProjectRisksConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectRisksConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
