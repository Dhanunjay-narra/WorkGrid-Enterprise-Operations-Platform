export const FinanceTaxesAssignmentGqlTypeDefs = `
  type FinanceTaxesAssignment {
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
    getFinanceTaxesAssignment(id: ID!): FinanceTaxesAssignment
    listFinanceTaxesAssignments(tenantId: String!, limit: Int): [FinanceTaxesAssignment!]!
  }

  extend type Mutation {
    createFinanceTaxesAssignment(tenantId: String!, code: String!, name: String!): FinanceTaxesAssignment!
    deleteFinanceTaxesAssignment(id: ID!): Boolean!
  }
`;

export const FinanceTaxesAssignmentGqlResolvers = {
  Query: {
    getFinanceTaxesAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTaxesAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
