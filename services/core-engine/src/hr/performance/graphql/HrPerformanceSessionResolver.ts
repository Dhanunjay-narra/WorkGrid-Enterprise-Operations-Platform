export const HrPerformanceSessionGqlTypeDefs = `
  type HrPerformanceSession {
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
    getHrPerformanceSession(id: ID!): HrPerformanceSession
    listHrPerformanceSessions(tenantId: String!, limit: Int): [HrPerformanceSession!]!
  }

  extend type Mutation {
    createHrPerformanceSession(tenantId: String!, code: String!, name: String!): HrPerformanceSession!
    deleteHrPerformanceSession(id: ID!): Boolean!
  }
`;

export const HrPerformanceSessionGqlResolvers = {
  Query: {
    getHrPerformanceSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPerformanceSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
