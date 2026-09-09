export const PrjMilestoneTypeDefs = `
  type PrjMilestone {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getPrjMilestone(id: ID!): PrjMilestone
    listPrjMilestones(tenantId: String!): [PrjMilestone!]!
  }
`;

export const PrjMilestoneResolvers = {
  Query: {
    getPrjMilestone: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "PrjMilestone", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listPrjMilestones: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "PrjMilestone", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
