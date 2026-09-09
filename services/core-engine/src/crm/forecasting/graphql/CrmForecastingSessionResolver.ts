export const CrmForecastingSessionGqlTypeDefs = `
  type CrmForecastingSession {
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
    getCrmForecastingSession(id: ID!): CrmForecastingSession
    listCrmForecastingSessions(tenantId: String!, limit: Int): [CrmForecastingSession!]!
  }

  extend type Mutation {
    createCrmForecastingSession(tenantId: String!, code: String!, name: String!): CrmForecastingSession!
    deleteCrmForecastingSession(id: ID!): Boolean!
  }
`;

export const CrmForecastingSessionGqlResolvers = {
  Query: {
    getCrmForecastingSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmForecastingSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
