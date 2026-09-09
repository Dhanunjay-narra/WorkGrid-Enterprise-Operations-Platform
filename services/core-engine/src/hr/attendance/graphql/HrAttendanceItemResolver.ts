export const HrAttendanceItemGqlTypeDefs = `
  type HrAttendanceItem {
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
    getHrAttendanceItem(id: ID!): HrAttendanceItem
    listHrAttendanceItems(tenantId: String!, limit: Int): [HrAttendanceItem!]!
  }

  extend type Mutation {
    createHrAttendanceItem(tenantId: String!, code: String!, name: String!): HrAttendanceItem!
    deleteHrAttendanceItem(id: ID!): Boolean!
  }
`;

export const HrAttendanceItemGqlResolvers = {
  Query: {
    getHrAttendanceItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrAttendanceItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
