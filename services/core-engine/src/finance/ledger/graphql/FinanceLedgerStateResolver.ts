export const FinanceLedgerStateGqlTypeDefs = `
  type FinanceLedgerState {
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
    getFinanceLedgerState(id: ID!): FinanceLedgerState
    listFinanceLedgerStates(tenantId: String!, limit: Int): [FinanceLedgerState!]!
  }

  extend type Mutation {
    createFinanceLedgerState(tenantId: String!, code: String!, name: String!): FinanceLedgerState!
    deleteFinanceLedgerState(id: ID!): Boolean!
  }
`;

export const FinanceLedgerStateGqlResolvers = {
  Query: {
    getFinanceLedgerState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceLedgerState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
