export const HrPayrollItemGqlTypeDefs = `
  type HrPayrollItem {
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
    getHrPayrollItem(id: ID!): HrPayrollItem
    listHrPayrollItems(tenantId: String!, limit: Int): [HrPayrollItem!]!
  }

  extend type Mutation {
    createHrPayrollItem(tenantId: String!, code: String!, name: String!): HrPayrollItem!
    deleteHrPayrollItem(id: ID!): Boolean!
  }
`;

export const HrPayrollItemGqlResolvers = {
  Query: {
    getHrPayrollItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPayrollItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
