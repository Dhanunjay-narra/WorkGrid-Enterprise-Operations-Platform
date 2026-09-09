export const SupFeedbackItemTypeDefs = `
  type SupFeedbackItem {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getSupFeedbackItem(id: ID!): SupFeedbackItem
    listSupFeedbackItems(tenantId: String!): [SupFeedbackItem!]!
  }
`;

export const SupFeedbackItemResolvers = {
  Query: {
    getSupFeedbackItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "SupFeedbackItem", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listSupFeedbackItems: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "SupFeedbackItem", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
