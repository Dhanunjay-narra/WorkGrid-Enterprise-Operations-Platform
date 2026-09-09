export const FinanceLedgerAssignmentGqlTypeDefs = `
  type FinanceLedgerAssignment {
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
    getFinanceLedgerAssignment(id: ID!): FinanceLedgerAssignment
    listFinanceLedgerAssignments(tenantId: String!, limit: Int): [FinanceLedgerAssignment!]!
  }

  extend type Mutation {
    createFinanceLedgerAssignment(tenantId: String!, code: String!, name: String!): FinanceLedgerAssignment!
    deleteFinanceLedgerAssignment(id: ID!): Boolean!
  }
`;

export const FinanceLedgerAssignmentGqlResolvers = {
  Query: {
    getFinanceLedgerAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceLedgerAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
