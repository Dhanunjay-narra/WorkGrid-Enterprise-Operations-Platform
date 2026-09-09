export const BiWidgetTypeDefs = `
  type BiWidget {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getBiWidget(id: ID!): BiWidget
    listBiWidgets(tenantId: String!): [BiWidget!]!
  }
`;

export const BiWidgetResolvers = {
  Query: {
    getBiWidget: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "BiWidget", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listBiWidgets: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "BiWidget", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
