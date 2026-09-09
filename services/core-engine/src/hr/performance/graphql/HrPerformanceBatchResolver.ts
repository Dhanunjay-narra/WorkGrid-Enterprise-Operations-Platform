export const HrPerformanceBatchGqlTypeDefs = `
  type HrPerformanceBatch {
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
    getHrPerformanceBatch(id: ID!): HrPerformanceBatch
    listHrPerformanceBatchs(tenantId: String!, limit: Int): [HrPerformanceBatch!]!
  }

  extend type Mutation {
    createHrPerformanceBatch(tenantId: String!, code: String!, name: String!): HrPerformanceBatch!
    deleteHrPerformanceBatch(id: ID!): Boolean!
  }
`;

export const HrPerformanceBatchGqlResolvers = {
  Query: {
    getHrPerformanceBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPerformanceBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
