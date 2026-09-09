export const CrmForecastingConfigGqlTypeDefs = `
  type CrmForecastingConfig {
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
    getCrmForecastingConfig(id: ID!): CrmForecastingConfig
    listCrmForecastingConfigs(tenantId: String!, limit: Int): [CrmForecastingConfig!]!
  }

  extend type Mutation {
    createCrmForecastingConfig(tenantId: String!, code: String!, name: String!): CrmForecastingConfig!
    deleteCrmForecastingConfig(id: ID!): Boolean!
  }
`;

export const CrmForecastingConfigGqlResolvers = {
  Query: {
    getCrmForecastingConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmForecastingConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
