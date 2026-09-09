export const FinanceBillsThresholdGqlTypeDefs = `
  type FinanceBillsThreshold {
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
    getFinanceBillsThreshold(id: ID!): FinanceBillsThreshold
    listFinanceBillsThresholds(tenantId: String!, limit: Int): [FinanceBillsThreshold!]!
  }

  extend type Mutation {
    createFinanceBillsThreshold(tenantId: String!, code: String!, name: String!): FinanceBillsThreshold!
    deleteFinanceBillsThreshold(id: ID!): Boolean!
  }
`;

export const FinanceBillsThresholdGqlResolvers = {
  Query: {
    getFinanceBillsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceBillsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
