export const HrPerformanceThresholdGqlTypeDefs = `
  type HrPerformanceThreshold {
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
    getHrPerformanceThreshold(id: ID!): HrPerformanceThreshold
    listHrPerformanceThresholds(tenantId: String!, limit: Int): [HrPerformanceThreshold!]!
  }

  extend type Mutation {
    createHrPerformanceThreshold(tenantId: String!, code: String!, name: String!): HrPerformanceThreshold!
    deleteHrPerformanceThreshold(id: ID!): Boolean!
  }
`;

export const HrPerformanceThresholdGqlResolvers = {
  Query: {
    getHrPerformanceThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPerformanceThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
