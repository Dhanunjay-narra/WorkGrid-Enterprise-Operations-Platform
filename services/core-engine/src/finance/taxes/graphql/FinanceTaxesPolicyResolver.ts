export const FinanceTaxesPolicyGqlTypeDefs = `
  type FinanceTaxesPolicy {
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
    getFinanceTaxesPolicy(id: ID!): FinanceTaxesPolicy
    listFinanceTaxesPolicys(tenantId: String!, limit: Int): [FinanceTaxesPolicy!]!
  }

  extend type Mutation {
    createFinanceTaxesPolicy(tenantId: String!, code: String!, name: String!): FinanceTaxesPolicy!
    deleteFinanceTaxesPolicy(id: ID!): Boolean!
  }
`;

export const FinanceTaxesPolicyGqlResolvers = {
  Query: {
    getFinanceTaxesPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTaxesPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
