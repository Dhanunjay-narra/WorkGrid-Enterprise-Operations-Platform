export const ObsDashboardsEventGqlTypeDefs = `
  type ObsDashboardsEvent {
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
    getObsDashboardsEvent(id: ID!): ObsDashboardsEvent
    listObsDashboardsEvents(tenantId: String!, limit: Int): [ObsDashboardsEvent!]!
  }

  extend type Mutation {
    createObsDashboardsEvent(tenantId: String!, code: String!, name: String!): ObsDashboardsEvent!
    deleteObsDashboardsEvent(id: ID!): Boolean!
  }
`;

export const ObsDashboardsEventGqlResolvers = {
  Query: {
    getObsDashboardsEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsDashboardsEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
