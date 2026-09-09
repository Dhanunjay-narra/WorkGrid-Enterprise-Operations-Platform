export const HrPerformanceTaskGqlTypeDefs = `
  type HrPerformanceTask {
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
    getHrPerformanceTask(id: ID!): HrPerformanceTask
    listHrPerformanceTasks(tenantId: String!, limit: Int): [HrPerformanceTask!]!
  }

  extend type Mutation {
    createHrPerformanceTask(tenantId: String!, code: String!, name: String!): HrPerformanceTask!
    deleteHrPerformanceTask(id: ID!): Boolean!
  }
`;

export const HrPerformanceTaskGqlResolvers = {
  Query: {
    getHrPerformanceTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPerformanceTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
