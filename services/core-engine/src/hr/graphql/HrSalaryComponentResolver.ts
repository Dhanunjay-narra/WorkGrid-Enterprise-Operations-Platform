export const HrSalaryComponentTypeDefs = `
  type HrSalaryComponent {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getHrSalaryComponent(id: ID!): HrSalaryComponent
    listHrSalaryComponents(tenantId: String!): [HrSalaryComponent!]!
  }
`;

export const HrSalaryComponentResolvers = {
  Query: {
    getHrSalaryComponent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "HrSalaryComponent", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listHrSalaryComponents: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "HrSalaryComponent", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
