export const FinanceLedgerPolicyGqlTypeDefs = `
  type FinanceLedgerPolicy {
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
    getFinanceLedgerPolicy(id: ID!): FinanceLedgerPolicy
    listFinanceLedgerPolicys(tenantId: String!, limit: Int): [FinanceLedgerPolicy!]!
  }

  extend type Mutation {
    createFinanceLedgerPolicy(tenantId: String!, code: String!, name: String!): FinanceLedgerPolicy!
    deleteFinanceLedgerPolicy(id: ID!): Boolean!
  }
`;

export const FinanceLedgerPolicyGqlResolvers = {
  Query: {
    getFinanceLedgerPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceLedgerPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
