export const FinanceBankingTaskGqlTypeDefs = `
  type FinanceBankingTask {
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
    getFinanceBankingTask(id: ID!): FinanceBankingTask
    listFinanceBankingTasks(tenantId: String!, limit: Int): [FinanceBankingTask!]!
  }

  extend type Mutation {
    createFinanceBankingTask(tenantId: String!, code: String!, name: String!): FinanceBankingTask!
    deleteFinanceBankingTask(id: ID!): Boolean!
  }
`;

export const FinanceBankingTaskGqlResolvers = {
  Query: {
    getFinanceBankingTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceBankingTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
