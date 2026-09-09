export const CrmForecastingTaskGqlTypeDefs = `
  type CrmForecastingTask {
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
    getCrmForecastingTask(id: ID!): CrmForecastingTask
    listCrmForecastingTasks(tenantId: String!, limit: Int): [CrmForecastingTask!]!
  }

  extend type Mutation {
    createCrmForecastingTask(tenantId: String!, code: String!, name: String!): CrmForecastingTask!
    deleteCrmForecastingTask(id: ID!): Boolean!
  }
`;

export const CrmForecastingTaskGqlResolvers = {
  Query: {
    getCrmForecastingTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmForecastingTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
