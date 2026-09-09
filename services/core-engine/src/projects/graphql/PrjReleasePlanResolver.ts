export const PrjReleasePlanTypeDefs = `
  type PrjReleasePlan {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getPrjReleasePlan(id: ID!): PrjReleasePlan
    listPrjReleasePlans(tenantId: String!): [PrjReleasePlan!]!
  }
`;

export const PrjReleasePlanResolvers = {
  Query: {
    getPrjReleasePlan: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "PrjReleasePlan", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listPrjReleasePlans: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "PrjReleasePlan", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
