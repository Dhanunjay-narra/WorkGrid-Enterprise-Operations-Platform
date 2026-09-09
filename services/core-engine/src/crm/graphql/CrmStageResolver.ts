export const CrmStageTypeDefs = `
  type CrmStage {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getCrmStage(id: ID!): CrmStage
    listCrmStages(tenantId: String!): [CrmStage!]!
  }
`;

export const CrmStageResolvers = {
  Query: {
    getCrmStage: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "CrmStage", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listCrmStages: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "CrmStage", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
