export const ProjectCapacityQueueGqlTypeDefs = `
  type ProjectCapacityQueue {
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
    getProjectCapacityQueue(id: ID!): ProjectCapacityQueue
    listProjectCapacityQueues(tenantId: String!, limit: Int): [ProjectCapacityQueue!]!
  }

  extend type Mutation {
    createProjectCapacityQueue(tenantId: String!, code: String!, name: String!): ProjectCapacityQueue!
    deleteProjectCapacityQueue(id: ID!): Boolean!
  }
`;

export const ProjectCapacityQueueGqlResolvers = {
  Query: {
    getProjectCapacityQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectCapacityQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
