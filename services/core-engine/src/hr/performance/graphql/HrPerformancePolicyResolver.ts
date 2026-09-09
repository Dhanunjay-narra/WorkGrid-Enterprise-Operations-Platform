export const HrPerformancePolicyGqlTypeDefs = `
  type HrPerformancePolicy {
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
    getHrPerformancePolicy(id: ID!): HrPerformancePolicy
    listHrPerformancePolicys(tenantId: String!, limit: Int): [HrPerformancePolicy!]!
  }

  extend type Mutation {
    createHrPerformancePolicy(tenantId: String!, code: String!, name: String!): HrPerformancePolicy!
    deleteHrPerformancePolicy(id: ID!): Boolean!
  }
`;

export const HrPerformancePolicyGqlResolvers = {
  Query: {
    getHrPerformancePolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPerformancePolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
