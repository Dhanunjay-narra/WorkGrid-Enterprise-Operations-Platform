export const HrInterviewStageTypeDefs = `
  type HrInterviewStage {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getHrInterviewStage(id: ID!): HrInterviewStage
    listHrInterviewStages(tenantId: String!): [HrInterviewStage!]!
  }
`;

export const HrInterviewStageResolvers = {
  Query: {
    getHrInterviewStage: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "HrInterviewStage", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listHrInterviewStages: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "HrInterviewStage", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
