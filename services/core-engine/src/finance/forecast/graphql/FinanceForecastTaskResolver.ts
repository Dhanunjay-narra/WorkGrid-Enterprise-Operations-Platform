export const FinanceForecastTaskGqlTypeDefs = `
  type FinanceForecastTask {
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
    getFinanceForecastTask(id: ID!): FinanceForecastTask
    listFinanceForecastTasks(tenantId: String!, limit: Int): [FinanceForecastTask!]!
  }

  extend type Mutation {
    createFinanceForecastTask(tenantId: String!, code: String!, name: String!): FinanceForecastTask!
    deleteFinanceForecastTask(id: ID!): Boolean!
  }
`;

export const FinanceForecastTaskGqlResolvers = {
  Query: {
    getFinanceForecastTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceForecastTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
