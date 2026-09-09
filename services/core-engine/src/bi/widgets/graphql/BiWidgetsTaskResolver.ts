export const BiWidgetsTaskGqlTypeDefs = `
  type BiWidgetsTask {
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
    getBiWidgetsTask(id: ID!): BiWidgetsTask
    listBiWidgetsTasks(tenantId: String!, limit: Int): [BiWidgetsTask!]!
  }

  extend type Mutation {
    createBiWidgetsTask(tenantId: String!, code: String!, name: String!): BiWidgetsTask!
    deleteBiWidgetsTask(id: ID!): Boolean!
  }
`;

export const BiWidgetsTaskGqlResolvers = {
  Query: {
    getBiWidgetsTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiWidgetsTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
