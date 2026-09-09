export const HrPerformanceStateGqlTypeDefs = `
  type HrPerformanceState {
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
    getHrPerformanceState(id: ID!): HrPerformanceState
    listHrPerformanceStates(tenantId: String!, limit: Int): [HrPerformanceState!]!
  }

  extend type Mutation {
    createHrPerformanceState(tenantId: String!, code: String!, name: String!): HrPerformanceState!
    deleteHrPerformanceState(id: ID!): Boolean!
  }
`;

export const HrPerformanceStateGqlResolvers = {
  Query: {
    getHrPerformanceState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPerformanceState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
