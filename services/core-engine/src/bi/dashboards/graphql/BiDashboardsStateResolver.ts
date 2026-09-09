export const BiDashboardsStateGqlTypeDefs = `
  type BiDashboardsState {
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
    getBiDashboardsState(id: ID!): BiDashboardsState
    listBiDashboardsStates(tenantId: String!, limit: Int): [BiDashboardsState!]!
  }

  extend type Mutation {
    createBiDashboardsState(tenantId: String!, code: String!, name: String!): BiDashboardsState!
    deleteBiDashboardsState(id: ID!): Boolean!
  }
`;

export const BiDashboardsStateGqlResolvers = {
  Query: {
    getBiDashboardsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiDashboardsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
