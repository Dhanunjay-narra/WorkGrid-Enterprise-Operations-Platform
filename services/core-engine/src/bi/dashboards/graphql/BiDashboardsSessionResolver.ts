export const BiDashboardsSessionGqlTypeDefs = `
  type BiDashboardsSession {
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
    getBiDashboardsSession(id: ID!): BiDashboardsSession
    listBiDashboardsSessions(tenantId: String!, limit: Int): [BiDashboardsSession!]!
  }

  extend type Mutation {
    createBiDashboardsSession(tenantId: String!, code: String!, name: String!): BiDashboardsSession!
    deleteBiDashboardsSession(id: ID!): Boolean!
  }
`;

export const BiDashboardsSessionGqlResolvers = {
  Query: {
    getBiDashboardsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiDashboardsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
