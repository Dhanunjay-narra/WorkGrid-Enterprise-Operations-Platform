export const BiKpisBatchGqlTypeDefs = `
  type BiKpisBatch {
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
    getBiKpisBatch(id: ID!): BiKpisBatch
    listBiKpisBatchs(tenantId: String!, limit: Int): [BiKpisBatch!]!
  }

  extend type Mutation {
    createBiKpisBatch(tenantId: String!, code: String!, name: String!): BiKpisBatch!
    deleteBiKpisBatch(id: ID!): Boolean!
  }
`;

export const BiKpisBatchGqlResolvers = {
  Query: {
    getBiKpisBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiKpisBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
