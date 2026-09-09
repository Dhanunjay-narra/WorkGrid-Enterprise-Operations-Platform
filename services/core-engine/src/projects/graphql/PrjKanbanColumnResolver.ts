export const PrjKanbanColumnTypeDefs = `
  type PrjKanbanColumn {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getPrjKanbanColumn(id: ID!): PrjKanbanColumn
    listPrjKanbanColumns(tenantId: String!): [PrjKanbanColumn!]!
  }
`;

export const PrjKanbanColumnResolvers = {
  Query: {
    getPrjKanbanColumn: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "PrjKanbanColumn", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listPrjKanbanColumns: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "PrjKanbanColumn", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
