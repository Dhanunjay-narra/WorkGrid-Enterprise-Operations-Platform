export const HrShiftsItemGqlTypeDefs = `
  type HrShiftsItem {
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
    getHrShiftsItem(id: ID!): HrShiftsItem
    listHrShiftsItems(tenantId: String!, limit: Int): [HrShiftsItem!]!
  }

  extend type Mutation {
    createHrShiftsItem(tenantId: String!, code: String!, name: String!): HrShiftsItem!
    deleteHrShiftsItem(id: ID!): Boolean!
  }
`;

export const HrShiftsItemGqlResolvers = {
  Query: {
    getHrShiftsItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrShiftsItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
