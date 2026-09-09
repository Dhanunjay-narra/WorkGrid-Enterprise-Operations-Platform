export const InventorySkuScheduleGqlTypeDefs = `
  type InventorySkuSchedule {
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
    getInventorySkuSchedule(id: ID!): InventorySkuSchedule
    listInventorySkuSchedules(tenantId: String!, limit: Int): [InventorySkuSchedule!]!
  }

  extend type Mutation {
    createInventorySkuSchedule(tenantId: String!, code: String!, name: String!): InventorySkuSchedule!
    deleteInventorySkuSchedule(id: ID!): Boolean!
  }
`;

export const InventorySkuScheduleGqlResolvers = {
  Query: {
    getInventorySkuSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventorySkuSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
