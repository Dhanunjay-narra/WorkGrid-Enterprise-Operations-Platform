export const HrPayrollPolicyGqlTypeDefs = `
  type HrPayrollPolicy {
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
    getHrPayrollPolicy(id: ID!): HrPayrollPolicy
    listHrPayrollPolicys(tenantId: String!, limit: Int): [HrPayrollPolicy!]!
  }

  extend type Mutation {
    createHrPayrollPolicy(tenantId: String!, code: String!, name: String!): HrPayrollPolicy!
    deleteHrPayrollPolicy(id: ID!): Boolean!
  }
`;

export const HrPayrollPolicyGqlResolvers = {
  Query: {
    getHrPayrollPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPayrollPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
