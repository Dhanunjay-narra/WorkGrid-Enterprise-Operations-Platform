export const BiDrilldownFilterTypeDefs = `
  type BiDrilldownFilter {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getBiDrilldownFilter(id: ID!): BiDrilldownFilter
    listBiDrilldownFilters(tenantId: String!): [BiDrilldownFilter!]!
  }
`;

export const BiDrilldownFilterResolvers = {
  Query: {
    getBiDrilldownFilter: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "BiDrilldownFilter", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listBiDrilldownFilters: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "BiDrilldownFilter", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
