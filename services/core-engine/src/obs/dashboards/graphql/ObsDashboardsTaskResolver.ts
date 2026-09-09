export const ObsDashboardsTaskGqlTypeDefs = `
  type ObsDashboardsTask {
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
    getObsDashboardsTask(id: ID!): ObsDashboardsTask
    listObsDashboardsTasks(tenantId: String!, limit: Int): [ObsDashboardsTask!]!
  }

  extend type Mutation {
    createObsDashboardsTask(tenantId: String!, code: String!, name: String!): ObsDashboardsTask!
    deleteObsDashboardsTask(id: ID!): Boolean!
  }
`;

export const ObsDashboardsTaskGqlResolvers = {
  Query: {
    getObsDashboardsTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsDashboardsTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
