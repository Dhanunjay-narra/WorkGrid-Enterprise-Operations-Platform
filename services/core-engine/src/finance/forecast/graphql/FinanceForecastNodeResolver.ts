export const FinanceForecastNodeGqlTypeDefs = `
  type FinanceForecastNode {
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
    getFinanceForecastNode(id: ID!): FinanceForecastNode
    listFinanceForecastNodes(tenantId: String!, limit: Int): [FinanceForecastNode!]!
  }

  extend type Mutation {
    createFinanceForecastNode(tenantId: String!, code: String!, name: String!): FinanceForecastNode!
    deleteFinanceForecastNode(id: ID!): Boolean!
  }
`;

export const FinanceForecastNodeGqlResolvers = {
  Query: {
    getFinanceForecastNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceForecastNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
