export const BiKpisTaskGqlTypeDefs = `
  type BiKpisTask {
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
    getBiKpisTask(id: ID!): BiKpisTask
    listBiKpisTasks(tenantId: String!, limit: Int): [BiKpisTask!]!
  }

  extend type Mutation {
    createBiKpisTask(tenantId: String!, code: String!, name: String!): BiKpisTask!
    deleteBiKpisTask(id: ID!): Boolean!
  }
`;

export const BiKpisTaskGqlResolvers = {
  Query: {
    getBiKpisTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiKpisTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
