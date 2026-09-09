export const PrjTaskTypeDefs = `
  type PrjTask {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getPrjTask(id: ID!): PrjTask
    listPrjTasks(tenantId: String!): [PrjTask!]!
  }
`;

export const PrjTaskResolvers = {
  Query: {
    getPrjTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "PrjTask", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listPrjTasks: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "PrjTask", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
