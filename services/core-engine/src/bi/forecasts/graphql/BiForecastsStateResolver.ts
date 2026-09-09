export const BiForecastsStateGqlTypeDefs = `
  type BiForecastsState {
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
    getBiForecastsState(id: ID!): BiForecastsState
    listBiForecastsStates(tenantId: String!, limit: Int): [BiForecastsState!]!
  }

  extend type Mutation {
    createBiForecastsState(tenantId: String!, code: String!, name: String!): BiForecastsState!
    deleteBiForecastsState(id: ID!): Boolean!
  }
`;

export const BiForecastsStateGqlResolvers = {
  Query: {
    getBiForecastsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiForecastsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
