export const FinanceLedgerTaskGqlTypeDefs = `
  type FinanceLedgerTask {
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
    getFinanceLedgerTask(id: ID!): FinanceLedgerTask
    listFinanceLedgerTasks(tenantId: String!, limit: Int): [FinanceLedgerTask!]!
  }

  extend type Mutation {
    createFinanceLedgerTask(tenantId: String!, code: String!, name: String!): FinanceLedgerTask!
    deleteFinanceLedgerTask(id: ID!): Boolean!
  }
`;

export const FinanceLedgerTaskGqlResolvers = {
  Query: {
    getFinanceLedgerTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceLedgerTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
