export const FinanceExpensesAssignmentGqlTypeDefs = `
  type FinanceExpensesAssignment {
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
    getFinanceExpensesAssignment(id: ID!): FinanceExpensesAssignment
    listFinanceExpensesAssignments(tenantId: String!, limit: Int): [FinanceExpensesAssignment!]!
  }

  extend type Mutation {
    createFinanceExpensesAssignment(tenantId: String!, code: String!, name: String!): FinanceExpensesAssignment!
    deleteFinanceExpensesAssignment(id: ID!): Boolean!
  }
`;

export const FinanceExpensesAssignmentGqlResolvers = {
  Query: {
    getFinanceExpensesAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceExpensesAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
