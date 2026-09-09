export const BiDashboardsTaskGqlTypeDefs = `
  type BiDashboardsTask {
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
    getBiDashboardsTask(id: ID!): BiDashboardsTask
    listBiDashboardsTasks(tenantId: String!, limit: Int): [BiDashboardsTask!]!
  }

  extend type Mutation {
    createBiDashboardsTask(tenantId: String!, code: String!, name: String!): BiDashboardsTask!
    deleteBiDashboardsTask(id: ID!): Boolean!
  }
`;

export const BiDashboardsTaskGqlResolvers = {
  Query: {
    getBiDashboardsTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiDashboardsTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
