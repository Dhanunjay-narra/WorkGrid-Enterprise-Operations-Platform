export const BiCohortsTaskGqlTypeDefs = `
  type BiCohortsTask {
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
    getBiCohortsTask(id: ID!): BiCohortsTask
    listBiCohortsTasks(tenantId: String!, limit: Int): [BiCohortsTask!]!
  }

  extend type Mutation {
    createBiCohortsTask(tenantId: String!, code: String!, name: String!): BiCohortsTask!
    deleteBiCohortsTask(id: ID!): Boolean!
  }
`;

export const BiCohortsTaskGqlResolvers = {
  Query: {
    getBiCohortsTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiCohortsTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
