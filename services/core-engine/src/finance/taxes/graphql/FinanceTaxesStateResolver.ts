export const FinanceTaxesStateGqlTypeDefs = `
  type FinanceTaxesState {
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
    getFinanceTaxesState(id: ID!): FinanceTaxesState
    listFinanceTaxesStates(tenantId: String!, limit: Int): [FinanceTaxesState!]!
  }

  extend type Mutation {
    createFinanceTaxesState(tenantId: String!, code: String!, name: String!): FinanceTaxesState!
    deleteFinanceTaxesState(id: ID!): Boolean!
  }
`;

export const FinanceTaxesStateGqlResolvers = {
  Query: {
    getFinanceTaxesState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTaxesState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
