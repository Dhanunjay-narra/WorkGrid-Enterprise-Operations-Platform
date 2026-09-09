export const FinanceTreasuryPolicyGqlTypeDefs = `
  type FinanceTreasuryPolicy {
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
    getFinanceTreasuryPolicy(id: ID!): FinanceTreasuryPolicy
    listFinanceTreasuryPolicys(tenantId: String!, limit: Int): [FinanceTreasuryPolicy!]!
  }

  extend type Mutation {
    createFinanceTreasuryPolicy(tenantId: String!, code: String!, name: String!): FinanceTreasuryPolicy!
    deleteFinanceTreasuryPolicy(id: ID!): Boolean!
  }
`;

export const FinanceTreasuryPolicyGqlResolvers = {
  Query: {
    getFinanceTreasuryPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTreasuryPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
