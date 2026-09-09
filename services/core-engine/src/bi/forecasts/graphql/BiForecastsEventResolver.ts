export const BiForecastsEventGqlTypeDefs = `
  type BiForecastsEvent {
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
    getBiForecastsEvent(id: ID!): BiForecastsEvent
    listBiForecastsEvents(tenantId: String!, limit: Int): [BiForecastsEvent!]!
  }

  extend type Mutation {
    createBiForecastsEvent(tenantId: String!, code: String!, name: String!): BiForecastsEvent!
    deleteBiForecastsEvent(id: ID!): Boolean!
  }
`;

export const BiForecastsEventGqlResolvers = {
  Query: {
    getBiForecastsEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiForecastsEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
