export const CrmForecastingThresholdGqlTypeDefs = `
  type CrmForecastingThreshold {
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
    getCrmForecastingThreshold(id: ID!): CrmForecastingThreshold
    listCrmForecastingThresholds(tenantId: String!, limit: Int): [CrmForecastingThreshold!]!
  }

  extend type Mutation {
    createCrmForecastingThreshold(tenantId: String!, code: String!, name: String!): CrmForecastingThreshold!
    deleteCrmForecastingThreshold(id: ID!): Boolean!
  }
`;

export const CrmForecastingThresholdGqlResolvers = {
  Query: {
    getCrmForecastingThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmForecastingThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
