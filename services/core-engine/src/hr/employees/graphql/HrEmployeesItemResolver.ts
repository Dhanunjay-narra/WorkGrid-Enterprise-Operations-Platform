export const HrEmployeesItemGqlTypeDefs = `
  type HrEmployeesItem {
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
    getHrEmployeesItem(id: ID!): HrEmployeesItem
    listHrEmployeesItems(tenantId: String!, limit: Int): [HrEmployeesItem!]!
  }

  extend type Mutation {
    createHrEmployeesItem(tenantId: String!, code: String!, name: String!): HrEmployeesItem!
    deleteHrEmployeesItem(id: ID!): Boolean!
  }
`;

export const HrEmployeesItemGqlResolvers = {
  Query: {
    getHrEmployeesItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrEmployeesItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
