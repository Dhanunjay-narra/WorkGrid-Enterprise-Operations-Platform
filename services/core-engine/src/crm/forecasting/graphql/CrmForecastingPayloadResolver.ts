export const CrmForecastingPayloadGqlTypeDefs = `
  type CrmForecastingPayload {
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
    getCrmForecastingPayload(id: ID!): CrmForecastingPayload
    listCrmForecastingPayloads(tenantId: String!, limit: Int): [CrmForecastingPayload!]!
  }

  extend type Mutation {
    createCrmForecastingPayload(tenantId: String!, code: String!, name: String!): CrmForecastingPayload!
    deleteCrmForecastingPayload(id: ID!): Boolean!
  }
`;

export const CrmForecastingPayloadGqlResolvers = {
  Query: {
    getCrmForecastingPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmForecastingPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
