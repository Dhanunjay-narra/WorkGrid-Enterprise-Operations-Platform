export const HrDepartmentsPolicyGqlTypeDefs = `
  type HrDepartmentsPolicy {
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
    getHrDepartmentsPolicy(id: ID!): HrDepartmentsPolicy
    listHrDepartmentsPolicys(tenantId: String!, limit: Int): [HrDepartmentsPolicy!]!
  }

  extend type Mutation {
    createHrDepartmentsPolicy(tenantId: String!, code: String!, name: String!): HrDepartmentsPolicy!
    deleteHrDepartmentsPolicy(id: ID!): Boolean!
  }
`;

export const HrDepartmentsPolicyGqlResolvers = {
  Query: {
    getHrDepartmentsPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrDepartmentsPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
