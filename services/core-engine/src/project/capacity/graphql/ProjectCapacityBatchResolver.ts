export const ProjectCapacityBatchGqlTypeDefs = `
  type ProjectCapacityBatch {
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
    getProjectCapacityBatch(id: ID!): ProjectCapacityBatch
    listProjectCapacityBatchs(tenantId: String!, limit: Int): [ProjectCapacityBatch!]!
  }

  extend type Mutation {
    createProjectCapacityBatch(tenantId: String!, code: String!, name: String!): ProjectCapacityBatch!
    deleteProjectCapacityBatch(id: ID!): Boolean!
  }
`;

export const ProjectCapacityBatchGqlResolvers = {
  Query: {
    getProjectCapacityBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectCapacityBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
