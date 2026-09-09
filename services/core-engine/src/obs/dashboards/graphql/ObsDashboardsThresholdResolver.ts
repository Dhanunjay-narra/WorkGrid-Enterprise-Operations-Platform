export const ObsDashboardsThresholdGqlTypeDefs = `
  type ObsDashboardsThreshold {
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
    getObsDashboardsThreshold(id: ID!): ObsDashboardsThreshold
    listObsDashboardsThresholds(tenantId: String!, limit: Int): [ObsDashboardsThreshold!]!
  }

  extend type Mutation {
    createObsDashboardsThreshold(tenantId: String!, code: String!, name: String!): ObsDashboardsThreshold!
    deleteObsDashboardsThreshold(id: ID!): Boolean!
  }
`;

export const ObsDashboardsThresholdGqlResolvers = {
  Query: {
    getObsDashboardsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsDashboardsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
