export const FinCashFlowItemTypeDefs = `
  type FinCashFlowItem {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getFinCashFlowItem(id: ID!): FinCashFlowItem
    listFinCashFlowItems(tenantId: String!): [FinCashFlowItem!]!
  }
`;

export const FinCashFlowItemResolvers = {
  Query: {
    getFinCashFlowItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "FinCashFlowItem", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listFinCashFlowItems: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "FinCashFlowItem", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
