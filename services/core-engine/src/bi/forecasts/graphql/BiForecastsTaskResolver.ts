export const BiForecastsTaskGqlTypeDefs = `
  type BiForecastsTask {
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
    getBiForecastsTask(id: ID!): BiForecastsTask
    listBiForecastsTasks(tenantId: String!, limit: Int): [BiForecastsTask!]!
  }

  extend type Mutation {
    createBiForecastsTask(tenantId: String!, code: String!, name: String!): BiForecastsTask!
    deleteBiForecastsTask(id: ID!): Boolean!
  }
`;

export const BiForecastsTaskGqlResolvers = {
  Query: {
    getBiForecastsTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiForecastsTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
