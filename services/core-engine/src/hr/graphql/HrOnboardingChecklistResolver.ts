export const HrOnboardingChecklistTypeDefs = `
  type HrOnboardingChecklist {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getHrOnboardingChecklist(id: ID!): HrOnboardingChecklist
    listHrOnboardingChecklists(tenantId: String!): [HrOnboardingChecklist!]!
  }
`;

export const HrOnboardingChecklistResolvers = {
  Query: {
    getHrOnboardingChecklist: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "HrOnboardingChecklist", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listHrOnboardingChecklists: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "HrOnboardingChecklist", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
