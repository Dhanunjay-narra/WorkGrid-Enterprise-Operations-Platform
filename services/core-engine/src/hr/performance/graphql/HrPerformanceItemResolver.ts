export const HrPerformanceItemGqlTypeDefs = `
  type HrPerformanceItem {
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
    getHrPerformanceItem(id: ID!): HrPerformanceItem
    listHrPerformanceItems(tenantId: String!, limit: Int): [HrPerformanceItem!]!
  }

  extend type Mutation {
    createHrPerformanceItem(tenantId: String!, code: String!, name: String!): HrPerformanceItem!
    deleteHrPerformanceItem(id: ID!): Boolean!
  }
`;

export const HrPerformanceItemGqlResolvers = {
  Query: {
    getHrPerformanceItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPerformanceItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
