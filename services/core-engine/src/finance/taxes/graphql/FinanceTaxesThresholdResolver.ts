export const FinanceTaxesThresholdGqlTypeDefs = `
  type FinanceTaxesThreshold {
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
    getFinanceTaxesThreshold(id: ID!): FinanceTaxesThreshold
    listFinanceTaxesThresholds(tenantId: String!, limit: Int): [FinanceTaxesThreshold!]!
  }

  extend type Mutation {
    createFinanceTaxesThreshold(tenantId: String!, code: String!, name: String!): FinanceTaxesThreshold!
    deleteFinanceTaxesThreshold(id: ID!): Boolean!
  }
`;

export const FinanceTaxesThresholdGqlResolvers = {
  Query: {
    getFinanceTaxesThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTaxesThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
