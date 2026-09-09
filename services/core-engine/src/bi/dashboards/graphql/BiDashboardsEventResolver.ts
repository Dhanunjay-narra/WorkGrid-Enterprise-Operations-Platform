export const BiDashboardsEventGqlTypeDefs = `
  type BiDashboardsEvent {
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
    getBiDashboardsEvent(id: ID!): BiDashboardsEvent
    listBiDashboardsEvents(tenantId: String!, limit: Int): [BiDashboardsEvent!]!
  }

  extend type Mutation {
    createBiDashboardsEvent(tenantId: String!, code: String!, name: String!): BiDashboardsEvent!
    deleteBiDashboardsEvent(id: ID!): Boolean!
  }
`;

export const BiDashboardsEventGqlResolvers = {
  Query: {
    getBiDashboardsEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiDashboardsEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
