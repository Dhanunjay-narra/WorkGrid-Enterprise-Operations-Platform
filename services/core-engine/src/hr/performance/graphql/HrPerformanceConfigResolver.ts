export const HrPerformanceConfigGqlTypeDefs = `
  type HrPerformanceConfig {
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
    getHrPerformanceConfig(id: ID!): HrPerformanceConfig
    listHrPerformanceConfigs(tenantId: String!, limit: Int): [HrPerformanceConfig!]!
  }

  extend type Mutation {
    createHrPerformanceConfig(tenantId: String!, code: String!, name: String!): HrPerformanceConfig!
    deleteHrPerformanceConfig(id: ID!): Boolean!
  }
`;

export const HrPerformanceConfigGqlResolvers = {
  Query: {
    getHrPerformanceConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPerformanceConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
