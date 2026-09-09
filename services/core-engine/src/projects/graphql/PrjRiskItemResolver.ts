export const PrjRiskItemTypeDefs = `
  type PrjRiskItem {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getPrjRiskItem(id: ID!): PrjRiskItem
    listPrjRiskItems(tenantId: String!): [PrjRiskItem!]!
  }
`;

export const PrjRiskItemResolvers = {
  Query: {
    getPrjRiskItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "PrjRiskItem", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listPrjRiskItems: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "PrjRiskItem", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
