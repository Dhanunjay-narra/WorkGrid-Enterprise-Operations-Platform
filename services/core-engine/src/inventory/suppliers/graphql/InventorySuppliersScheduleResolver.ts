export const InventorySuppliersScheduleGqlTypeDefs = `
  type InventorySuppliersSchedule {
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
    getInventorySuppliersSchedule(id: ID!): InventorySuppliersSchedule
    listInventorySuppliersSchedules(tenantId: String!, limit: Int): [InventorySuppliersSchedule!]!
  }

  extend type Mutation {
    createInventorySuppliersSchedule(tenantId: String!, code: String!, name: String!): InventorySuppliersSchedule!
    deleteInventorySuppliersSchedule(id: ID!): Boolean!
  }
`;

export const InventorySuppliersScheduleGqlResolvers = {
  Query: {
    getInventorySuppliersSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventorySuppliersSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
