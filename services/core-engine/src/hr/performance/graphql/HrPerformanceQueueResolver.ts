export const HrPerformanceQueueGqlTypeDefs = `
  type HrPerformanceQueue {
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
    getHrPerformanceQueue(id: ID!): HrPerformanceQueue
    listHrPerformanceQueues(tenantId: String!, limit: Int): [HrPerformanceQueue!]!
  }

  extend type Mutation {
    createHrPerformanceQueue(tenantId: String!, code: String!, name: String!): HrPerformanceQueue!
    deleteHrPerformanceQueue(id: ID!): Boolean!
  }
`;

export const HrPerformanceQueueGqlResolvers = {
  Query: {
    getHrPerformanceQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPerformanceQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
