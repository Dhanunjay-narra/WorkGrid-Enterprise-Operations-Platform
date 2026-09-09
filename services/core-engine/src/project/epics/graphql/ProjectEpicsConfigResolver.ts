export const ProjectEpicsConfigGqlTypeDefs = `
  type ProjectEpicsConfig {
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
    getProjectEpicsConfig(id: ID!): ProjectEpicsConfig
    listProjectEpicsConfigs(tenantId: String!, limit: Int): [ProjectEpicsConfig!]!
  }

  extend type Mutation {
    createProjectEpicsConfig(tenantId: String!, code: String!, name: String!): ProjectEpicsConfig!
    deleteProjectEpicsConfig(id: ID!): Boolean!
  }
`;

export const ProjectEpicsConfigGqlResolvers = {
  Query: {
    getProjectEpicsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectEpicsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
