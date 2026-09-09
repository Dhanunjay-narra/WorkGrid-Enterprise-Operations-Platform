export const ProjectSprintsQueueGqlTypeDefs = `
  type ProjectSprintsQueue {
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
    getProjectSprintsQueue(id: ID!): ProjectSprintsQueue
    listProjectSprintsQueues(tenantId: String!, limit: Int): [ProjectSprintsQueue!]!
  }

  extend type Mutation {
    createProjectSprintsQueue(tenantId: String!, code: String!, name: String!): ProjectSprintsQueue!
    deleteProjectSprintsQueue(id: ID!): Boolean!
  }
`;

export const ProjectSprintsQueueGqlResolvers = {
  Query: {
    getProjectSprintsQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectSprintsQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
