export const FinanceTreasuryStateGqlTypeDefs = `
  type FinanceTreasuryState {
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
    getFinanceTreasuryState(id: ID!): FinanceTreasuryState
    listFinanceTreasuryStates(tenantId: String!, limit: Int): [FinanceTreasuryState!]!
  }

  extend type Mutation {
    createFinanceTreasuryState(tenantId: String!, code: String!, name: String!): FinanceTreasuryState!
    deleteFinanceTreasuryState(id: ID!): Boolean!
  }
`;

export const FinanceTreasuryStateGqlResolvers = {
  Query: {
    getFinanceTreasuryState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTreasuryState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
