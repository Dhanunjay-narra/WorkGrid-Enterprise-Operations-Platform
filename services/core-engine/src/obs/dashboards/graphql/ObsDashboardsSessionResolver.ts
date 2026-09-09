export const ObsDashboardsSessionGqlTypeDefs = `
  type ObsDashboardsSession {
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
    getObsDashboardsSession(id: ID!): ObsDashboardsSession
    listObsDashboardsSessions(tenantId: String!, limit: Int): [ObsDashboardsSession!]!
  }

  extend type Mutation {
    createObsDashboardsSession(tenantId: String!, code: String!, name: String!): ObsDashboardsSession!
    deleteObsDashboardsSession(id: ID!): Boolean!
  }
`;

export const ObsDashboardsSessionGqlResolvers = {
  Query: {
    getObsDashboardsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsDashboardsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
