export const FinanceTaxesQueueGqlTypeDefs = `
  type FinanceTaxesQueue {
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
    getFinanceTaxesQueue(id: ID!): FinanceTaxesQueue
    listFinanceTaxesQueues(tenantId: String!, limit: Int): [FinanceTaxesQueue!]!
  }

  extend type Mutation {
    createFinanceTaxesQueue(tenantId: String!, code: String!, name: String!): FinanceTaxesQueue!
    deleteFinanceTaxesQueue(id: ID!): Boolean!
  }
`;

export const FinanceTaxesQueueGqlResolvers = {
  Query: {
    getFinanceTaxesQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTaxesQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
