export const PrjBudgetLineTypeDefs = `
  type PrjBudgetLine {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getPrjBudgetLine(id: ID!): PrjBudgetLine
    listPrjBudgetLines(tenantId: String!): [PrjBudgetLine!]!
  }
`;

export const PrjBudgetLineResolvers = {
  Query: {
    getPrjBudgetLine: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "PrjBudgetLine", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listPrjBudgetLines: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "PrjBudgetLine", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
