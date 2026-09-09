export const HrPayrollThresholdGqlTypeDefs = `
  type HrPayrollThreshold {
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
    getHrPayrollThreshold(id: ID!): HrPayrollThreshold
    listHrPayrollThresholds(tenantId: String!, limit: Int): [HrPayrollThreshold!]!
  }

  extend type Mutation {
    createHrPayrollThreshold(tenantId: String!, code: String!, name: String!): HrPayrollThreshold!
    deleteHrPayrollThreshold(id: ID!): Boolean!
  }
`;

export const HrPayrollThresholdGqlResolvers = {
  Query: {
    getHrPayrollThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPayrollThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
