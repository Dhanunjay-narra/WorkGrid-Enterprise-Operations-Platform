export const CrmForecastingPolicyGqlTypeDefs = `
  type CrmForecastingPolicy {
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
    getCrmForecastingPolicy(id: ID!): CrmForecastingPolicy
    listCrmForecastingPolicys(tenantId: String!, limit: Int): [CrmForecastingPolicy!]!
  }

  extend type Mutation {
    createCrmForecastingPolicy(tenantId: String!, code: String!, name: String!): CrmForecastingPolicy!
    deleteCrmForecastingPolicy(id: ID!): Boolean!
  }
`;

export const CrmForecastingPolicyGqlResolvers = {
  Query: {
    getCrmForecastingPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmForecastingPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
