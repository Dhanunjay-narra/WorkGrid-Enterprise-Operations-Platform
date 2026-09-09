export const CrmForecastingEventGqlTypeDefs = `
  type CrmForecastingEvent {
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
    getCrmForecastingEvent(id: ID!): CrmForecastingEvent
    listCrmForecastingEvents(tenantId: String!, limit: Int): [CrmForecastingEvent!]!
  }

  extend type Mutation {
    createCrmForecastingEvent(tenantId: String!, code: String!, name: String!): CrmForecastingEvent!
    deleteCrmForecastingEvent(id: ID!): Boolean!
  }
`;

export const CrmForecastingEventGqlResolvers = {
  Query: {
    getCrmForecastingEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmForecastingEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
