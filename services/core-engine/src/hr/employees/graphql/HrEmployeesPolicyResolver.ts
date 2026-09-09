export const HrEmployeesPolicyGqlTypeDefs = `
  type HrEmployeesPolicy {
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
    getHrEmployeesPolicy(id: ID!): HrEmployeesPolicy
    listHrEmployeesPolicys(tenantId: String!, limit: Int): [HrEmployeesPolicy!]!
  }

  extend type Mutation {
    createHrEmployeesPolicy(tenantId: String!, code: String!, name: String!): HrEmployeesPolicy!
    deleteHrEmployeesPolicy(id: ID!): Boolean!
  }
`;

export const HrEmployeesPolicyGqlResolvers = {
  Query: {
    getHrEmployeesPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrEmployeesPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
