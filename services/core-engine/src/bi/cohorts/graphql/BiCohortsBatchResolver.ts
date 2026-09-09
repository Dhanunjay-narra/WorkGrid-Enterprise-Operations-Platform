export const BiCohortsBatchGqlTypeDefs = `
  type BiCohortsBatch {
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
    getBiCohortsBatch(id: ID!): BiCohortsBatch
    listBiCohortsBatchs(tenantId: String!, limit: Int): [BiCohortsBatch!]!
  }

  extend type Mutation {
    createBiCohortsBatch(tenantId: String!, code: String!, name: String!): BiCohortsBatch!
    deleteBiCohortsBatch(id: ID!): Boolean!
  }
`;

export const BiCohortsBatchGqlResolvers = {
  Query: {
    getBiCohortsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiCohortsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
