export const FinanceTaxesBatchGqlTypeDefs = `
  type FinanceTaxesBatch {
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
    getFinanceTaxesBatch(id: ID!): FinanceTaxesBatch
    listFinanceTaxesBatchs(tenantId: String!, limit: Int): [FinanceTaxesBatch!]!
  }

  extend type Mutation {
    createFinanceTaxesBatch(tenantId: String!, code: String!, name: String!): FinanceTaxesBatch!
    deleteFinanceTaxesBatch(id: ID!): Boolean!
  }
`;

export const FinanceTaxesBatchGqlResolvers = {
  Query: {
    getFinanceTaxesBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTaxesBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
