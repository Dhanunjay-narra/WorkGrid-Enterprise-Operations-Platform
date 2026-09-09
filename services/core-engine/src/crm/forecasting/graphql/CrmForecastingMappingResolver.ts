export const CrmForecastingMappingGqlTypeDefs = `
  type CrmForecastingMapping {
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
    getCrmForecastingMapping(id: ID!): CrmForecastingMapping
    listCrmForecastingMappings(tenantId: String!, limit: Int): [CrmForecastingMapping!]!
  }

  extend type Mutation {
    createCrmForecastingMapping(tenantId: String!, code: String!, name: String!): CrmForecastingMapping!
    deleteCrmForecastingMapping(id: ID!): Boolean!
  }
`;

export const CrmForecastingMappingGqlResolvers = {
  Query: {
    getCrmForecastingMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmForecastingMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
