export const ObsDashboardsStateGqlTypeDefs = `
  type ObsDashboardsState {
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
    getObsDashboardsState(id: ID!): ObsDashboardsState
    listObsDashboardsStates(tenantId: String!, limit: Int): [ObsDashboardsState!]!
  }

  extend type Mutation {
    createObsDashboardsState(tenantId: String!, code: String!, name: String!): ObsDashboardsState!
    deleteObsDashboardsState(id: ID!): Boolean!
  }
`;

export const ObsDashboardsStateGqlResolvers = {
  Query: {
    getObsDashboardsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsDashboardsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
