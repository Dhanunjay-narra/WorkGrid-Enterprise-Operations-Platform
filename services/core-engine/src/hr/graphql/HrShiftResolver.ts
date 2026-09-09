export const HrShiftTypeDefs = `
  type HrShift {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getHrShift(id: ID!): HrShift
    listHrShifts(tenantId: String!): [HrShift!]!
  }
`;

export const HrShiftResolvers = {
  Query: {
    getHrShift: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "HrShift", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listHrShifts: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "HrShift", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
