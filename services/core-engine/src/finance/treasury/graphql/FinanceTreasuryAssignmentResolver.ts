export const FinanceTreasuryAssignmentGqlTypeDefs = `
  type FinanceTreasuryAssignment {
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
    getFinanceTreasuryAssignment(id: ID!): FinanceTreasuryAssignment
    listFinanceTreasuryAssignments(tenantId: String!, limit: Int): [FinanceTreasuryAssignment!]!
  }

  extend type Mutation {
    createFinanceTreasuryAssignment(tenantId: String!, code: String!, name: String!): FinanceTreasuryAssignment!
    deleteFinanceTreasuryAssignment(id: ID!): Boolean!
  }
`;

export const FinanceTreasuryAssignmentGqlResolvers = {
  Query: {
    getFinanceTreasuryAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTreasuryAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
