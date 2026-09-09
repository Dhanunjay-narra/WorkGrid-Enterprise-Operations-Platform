export const HrEmployeeTypeDefs = `
  type HrEmployee {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getHrEmployee(id: ID!): HrEmployee
    listHrEmployees(tenantId: String!): [HrEmployee!]!
  }
`;

export const HrEmployeeResolvers = {
  Query: {
    getHrEmployee: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "HrEmployee", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listHrEmployees: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "HrEmployee", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
