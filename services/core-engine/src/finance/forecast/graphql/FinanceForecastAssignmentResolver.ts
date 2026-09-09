export const FinanceForecastAssignmentGqlTypeDefs = `
  type FinanceForecastAssignment {
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
    getFinanceForecastAssignment(id: ID!): FinanceForecastAssignment
    listFinanceForecastAssignments(tenantId: String!, limit: Int): [FinanceForecastAssignment!]!
  }

  extend type Mutation {
    createFinanceForecastAssignment(tenantId: String!, code: String!, name: String!): FinanceForecastAssignment!
    deleteFinanceForecastAssignment(id: ID!): Boolean!
  }
`;

export const FinanceForecastAssignmentGqlResolvers = {
  Query: {
    getFinanceForecastAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceForecastAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
