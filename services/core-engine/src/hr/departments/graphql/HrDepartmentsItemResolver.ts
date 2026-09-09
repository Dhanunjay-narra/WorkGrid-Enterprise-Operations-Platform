export const HrDepartmentsItemGqlTypeDefs = `
  type HrDepartmentsItem {
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
    getHrDepartmentsItem(id: ID!): HrDepartmentsItem
    listHrDepartmentsItems(tenantId: String!, limit: Int): [HrDepartmentsItem!]!
  }

  extend type Mutation {
    createHrDepartmentsItem(tenantId: String!, code: String!, name: String!): HrDepartmentsItem!
    deleteHrDepartmentsItem(id: ID!): Boolean!
  }
`;

export const HrDepartmentsItemGqlResolvers = {
  Query: {
    getHrDepartmentsItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrDepartmentsItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
