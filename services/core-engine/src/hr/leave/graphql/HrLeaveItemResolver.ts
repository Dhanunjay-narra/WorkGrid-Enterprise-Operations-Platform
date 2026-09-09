export const HrLeaveItemGqlTypeDefs = `
  type HrLeaveItem {
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
    getHrLeaveItem(id: ID!): HrLeaveItem
    listHrLeaveItems(tenantId: String!, limit: Int): [HrLeaveItem!]!
  }

  extend type Mutation {
    createHrLeaveItem(tenantId: String!, code: String!, name: String!): HrLeaveItem!
    deleteHrLeaveItem(id: ID!): Boolean!
  }
`;

export const HrLeaveItemGqlResolvers = {
  Query: {
    getHrLeaveItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrLeaveItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
