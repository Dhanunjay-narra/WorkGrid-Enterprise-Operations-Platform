export const FinanceTaxesTaskGqlTypeDefs = `
  type FinanceTaxesTask {
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
    getFinanceTaxesTask(id: ID!): FinanceTaxesTask
    listFinanceTaxesTasks(tenantId: String!, limit: Int): [FinanceTaxesTask!]!
  }

  extend type Mutation {
    createFinanceTaxesTask(tenantId: String!, code: String!, name: String!): FinanceTaxesTask!
    deleteFinanceTaxesTask(id: ID!): Boolean!
  }
`;

export const FinanceTaxesTaskGqlResolvers = {
  Query: {
    getFinanceTaxesTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTaxesTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
