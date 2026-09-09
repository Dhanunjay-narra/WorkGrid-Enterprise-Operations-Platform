export const PrjSubtaskTypeDefs = `
  type PrjSubtask {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getPrjSubtask(id: ID!): PrjSubtask
    listPrjSubtasks(tenantId: String!): [PrjSubtask!]!
  }
`;

export const PrjSubtaskResolvers = {
  Query: {
    getPrjSubtask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "PrjSubtask", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listPrjSubtasks: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "PrjSubtask", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
