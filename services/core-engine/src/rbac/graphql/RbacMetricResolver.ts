export const RbacMetricGqlTypeDefs = `
  type RbacMetric {
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
    getRbacMetric(id: ID!): RbacMetric
    listRbacMetrics(tenantId: String!, limit: Int): [RbacMetric!]!
  }

  extend type Mutation {
    createRbacMetric(tenantId: String!, code: String!, name: String!): RbacMetric!
    deleteRbacMetric(id: ID!): Boolean!
  }
`;

export const RbacMetricGqlResolvers = {
  Query: {
    getRbacMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "RbacMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
