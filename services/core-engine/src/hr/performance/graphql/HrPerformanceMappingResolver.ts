export const HrPerformanceMappingGqlTypeDefs = `
  type HrPerformanceMapping {
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
    getHrPerformanceMapping(id: ID!): HrPerformanceMapping
    listHrPerformanceMappings(tenantId: String!, limit: Int): [HrPerformanceMapping!]!
  }

  extend type Mutation {
    createHrPerformanceMapping(tenantId: String!, code: String!, name: String!): HrPerformanceMapping!
    deleteHrPerformanceMapping(id: ID!): Boolean!
  }
`;

export const HrPerformanceMappingGqlResolvers = {
  Query: {
    getHrPerformanceMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPerformanceMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
