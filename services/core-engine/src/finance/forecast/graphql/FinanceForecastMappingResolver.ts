export const FinanceForecastMappingGqlTypeDefs = `
  type FinanceForecastMapping {
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
    getFinanceForecastMapping(id: ID!): FinanceForecastMapping
    listFinanceForecastMappings(tenantId: String!, limit: Int): [FinanceForecastMapping!]!
  }

  extend type Mutation {
    createFinanceForecastMapping(tenantId: String!, code: String!, name: String!): FinanceForecastMapping!
    deleteFinanceForecastMapping(id: ID!): Boolean!
  }
`;

export const FinanceForecastMappingGqlResolvers = {
  Query: {
    getFinanceForecastMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceForecastMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
