export const FinanceTreasuryTaskGqlTypeDefs = `
  type FinanceTreasuryTask {
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
    getFinanceTreasuryTask(id: ID!): FinanceTreasuryTask
    listFinanceTreasuryTasks(tenantId: String!, limit: Int): [FinanceTreasuryTask!]!
  }

  extend type Mutation {
    createFinanceTreasuryTask(tenantId: String!, code: String!, name: String!): FinanceTreasuryTask!
    deleteFinanceTreasuryTask(id: ID!): Boolean!
  }
`;

export const FinanceTreasuryTaskGqlResolvers = {
  Query: {
    getFinanceTreasuryTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTreasuryTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
