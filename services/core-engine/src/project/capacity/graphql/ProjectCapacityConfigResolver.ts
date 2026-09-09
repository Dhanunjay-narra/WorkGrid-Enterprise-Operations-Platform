export const ProjectCapacityConfigGqlTypeDefs = `
  type ProjectCapacityConfig {
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
    getProjectCapacityConfig(id: ID!): ProjectCapacityConfig
    listProjectCapacityConfigs(tenantId: String!, limit: Int): [ProjectCapacityConfig!]!
  }

  extend type Mutation {
    createProjectCapacityConfig(tenantId: String!, code: String!, name: String!): ProjectCapacityConfig!
    deleteProjectCapacityConfig(id: ID!): Boolean!
  }
`;

export const ProjectCapacityConfigGqlResolvers = {
  Query: {
    getProjectCapacityConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectCapacityConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
