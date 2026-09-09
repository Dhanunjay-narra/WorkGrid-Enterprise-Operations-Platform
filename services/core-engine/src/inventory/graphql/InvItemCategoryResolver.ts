export const InvItemCategoryTypeDefs = `
  type InvItemCategory {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getInvItemCategory(id: ID!): InvItemCategory
    listInvItemCategorys(tenantId: String!): [InvItemCategory!]!
  }
`;

export const InvItemCategoryResolvers = {
  Query: {
    getInvItemCategory: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "InvItemCategory", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listInvItemCategorys: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "InvItemCategory", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
