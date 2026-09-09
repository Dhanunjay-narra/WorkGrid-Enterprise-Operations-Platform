export const HrDepartmentTypeDefs = `
  type HrDepartment {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getHrDepartment(id: ID!): HrDepartment
    listHrDepartments(tenantId: String!): [HrDepartment!]!
  }
`;

export const HrDepartmentResolvers = {
  Query: {
    getHrDepartment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "HrDepartment", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listHrDepartments: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "HrDepartment", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
