export const FinanceLedgerQueueGqlTypeDefs = `
  type FinanceLedgerQueue {
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
    getFinanceLedgerQueue(id: ID!): FinanceLedgerQueue
    listFinanceLedgerQueues(tenantId: String!, limit: Int): [FinanceLedgerQueue!]!
  }

  extend type Mutation {
    createFinanceLedgerQueue(tenantId: String!, code: String!, name: String!): FinanceLedgerQueue!
    deleteFinanceLedgerQueue(id: ID!): Boolean!
  }
`;

export const FinanceLedgerQueueGqlResolvers = {
  Query: {
    getFinanceLedgerQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceLedgerQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
