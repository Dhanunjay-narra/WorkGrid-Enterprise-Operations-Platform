export const FinanceForecastPolicyGqlTypeDefs = `
  type FinanceForecastPolicy {
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
    getFinanceForecastPolicy(id: ID!): FinanceForecastPolicy
    listFinanceForecastPolicys(tenantId: String!, limit: Int): [FinanceForecastPolicy!]!
  }

  extend type Mutation {
    createFinanceForecastPolicy(tenantId: String!, code: String!, name: String!): FinanceForecastPolicy!
    deleteFinanceForecastPolicy(id: ID!): Boolean!
  }
`;

export const FinanceForecastPolicyGqlResolvers = {
  Query: {
    getFinanceForecastPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceForecastPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
