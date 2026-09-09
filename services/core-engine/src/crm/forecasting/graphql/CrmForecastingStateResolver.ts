export const CrmForecastingStateGqlTypeDefs = `
  type CrmForecastingState {
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
    getCrmForecastingState(id: ID!): CrmForecastingState
    listCrmForecastingStates(tenantId: String!, limit: Int): [CrmForecastingState!]!
  }

  extend type Mutation {
    createCrmForecastingState(tenantId: String!, code: String!, name: String!): CrmForecastingState!
    deleteCrmForecastingState(id: ID!): Boolean!
  }
`;

export const CrmForecastingStateGqlResolvers = {
  Query: {
    getCrmForecastingState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmForecastingState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
