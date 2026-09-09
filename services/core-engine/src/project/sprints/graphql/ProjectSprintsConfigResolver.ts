export const ProjectSprintsConfigGqlTypeDefs = `
  type ProjectSprintsConfig {
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
    getProjectSprintsConfig(id: ID!): ProjectSprintsConfig
    listProjectSprintsConfigs(tenantId: String!, limit: Int): [ProjectSprintsConfig!]!
  }

  extend type Mutation {
    createProjectSprintsConfig(tenantId: String!, code: String!, name: String!): ProjectSprintsConfig!
    deleteProjectSprintsConfig(id: ID!): Boolean!
  }
`;

export const ProjectSprintsConfigGqlResolvers = {
  Query: {
    getProjectSprintsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectSprintsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
