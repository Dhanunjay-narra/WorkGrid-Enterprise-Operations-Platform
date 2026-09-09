export const PrjGanttDependencyTypeDefs = `
  type PrjGanttDependency {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getPrjGanttDependency(id: ID!): PrjGanttDependency
    listPrjGanttDependencys(tenantId: String!): [PrjGanttDependency!]!
  }
`;

export const PrjGanttDependencyResolvers = {
  Query: {
    getPrjGanttDependency: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "PrjGanttDependency", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listPrjGanttDependencys: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "PrjGanttDependency", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
