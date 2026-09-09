export const InventoryOrdersTaskGqlTypeDefs = `
  type InventoryOrdersTask {
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
    getInventoryOrdersTask(id: ID!): InventoryOrdersTask
    listInventoryOrdersTasks(tenantId: String!, limit: Int): [InventoryOrdersTask!]!
  }

  extend type Mutation {
    createInventoryOrdersTask(tenantId: String!, code: String!, name: String!): InventoryOrdersTask!
    deleteInventoryOrdersTask(id: ID!): Boolean!
  }
`;

export const InventoryOrdersTaskGqlResolvers = {
  Query: {
    getInventoryOrdersTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryOrdersTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
