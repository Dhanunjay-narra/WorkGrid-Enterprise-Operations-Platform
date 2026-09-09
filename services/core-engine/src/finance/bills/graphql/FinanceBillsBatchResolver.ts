export const FinanceBillsBatchGqlTypeDefs = `
  type FinanceBillsBatch {
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
    getFinanceBillsBatch(id: ID!): FinanceBillsBatch
    listFinanceBillsBatchs(tenantId: String!, limit: Int): [FinanceBillsBatch!]!
  }

  extend type Mutation {
    createFinanceBillsBatch(tenantId: String!, code: String!, name: String!): FinanceBillsBatch!
    deleteFinanceBillsBatch(id: ID!): Boolean!
  }
`;

export const FinanceBillsBatchGqlResolvers = {
  Query: {
    getFinanceBillsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceBillsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
