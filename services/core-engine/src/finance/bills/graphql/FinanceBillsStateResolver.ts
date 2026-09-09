export const FinanceBillsStateGqlTypeDefs = `
  type FinanceBillsState {
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
    getFinanceBillsState(id: ID!): FinanceBillsState
    listFinanceBillsStates(tenantId: String!, limit: Int): [FinanceBillsState!]!
  }

  extend type Mutation {
    createFinanceBillsState(tenantId: String!, code: String!, name: String!): FinanceBillsState!
    deleteFinanceBillsState(id: ID!): Boolean!
  }
`;

export const FinanceBillsStateGqlResolvers = {
  Query: {
    getFinanceBillsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceBillsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
