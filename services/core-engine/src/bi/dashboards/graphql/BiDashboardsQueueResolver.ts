export const BiDashboardsQueueGqlTypeDefs = `
  type BiDashboardsQueue {
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
    getBiDashboardsQueue(id: ID!): BiDashboardsQueue
    listBiDashboardsQueues(tenantId: String!, limit: Int): [BiDashboardsQueue!]!
  }

  extend type Mutation {
    createBiDashboardsQueue(tenantId: String!, code: String!, name: String!): BiDashboardsQueue!
    deleteBiDashboardsQueue(id: ID!): Boolean!
  }
`;

export const BiDashboardsQueueGqlResolvers = {
  Query: {
    getBiDashboardsQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiDashboardsQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
