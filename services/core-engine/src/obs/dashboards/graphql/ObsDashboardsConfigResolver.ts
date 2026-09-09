export const ObsDashboardsConfigGqlTypeDefs = `
  type ObsDashboardsConfig {
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
    getObsDashboardsConfig(id: ID!): ObsDashboardsConfig
    listObsDashboardsConfigs(tenantId: String!, limit: Int): [ObsDashboardsConfig!]!
  }

  extend type Mutation {
    createObsDashboardsConfig(tenantId: String!, code: String!, name: String!): ObsDashboardsConfig!
    deleteObsDashboardsConfig(id: ID!): Boolean!
  }
`;

export const ObsDashboardsConfigGqlResolvers = {
  Query: {
    getObsDashboardsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsDashboardsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
