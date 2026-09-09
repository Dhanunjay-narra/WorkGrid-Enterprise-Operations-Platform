export const InventoryStockScheduleGqlTypeDefs = `
  type InventoryStockSchedule {
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
    getInventoryStockSchedule(id: ID!): InventoryStockSchedule
    listInventoryStockSchedules(tenantId: String!, limit: Int): [InventoryStockSchedule!]!
  }

  extend type Mutation {
    createInventoryStockSchedule(tenantId: String!, code: String!, name: String!): InventoryStockSchedule!
    deleteInventoryStockSchedule(id: ID!): Boolean!
  }
`;

export const InventoryStockScheduleGqlResolvers = {
  Query: {
    getInventoryStockSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryStockSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
