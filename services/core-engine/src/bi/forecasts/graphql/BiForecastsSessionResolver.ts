export const BiForecastsSessionGqlTypeDefs = `
  type BiForecastsSession {
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
    getBiForecastsSession(id: ID!): BiForecastsSession
    listBiForecastsSessions(tenantId: String!, limit: Int): [BiForecastsSession!]!
  }

  extend type Mutation {
    createBiForecastsSession(tenantId: String!, code: String!, name: String!): BiForecastsSession!
    deleteBiForecastsSession(id: ID!): Boolean!
  }
`;

export const BiForecastsSessionGqlResolvers = {
  Query: {
    getBiForecastsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiForecastsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
