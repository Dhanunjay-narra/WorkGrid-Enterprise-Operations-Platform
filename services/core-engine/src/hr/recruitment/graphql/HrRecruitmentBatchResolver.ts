export const HrRecruitmentBatchGqlTypeDefs = `
  type HrRecruitmentBatch {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    version: Int!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    getHrRecruitmentBatch(id: ID!): HrRecruitmentBatch
    listHrRecruitmentBatchs(tenantId: String!, limit: Int): [HrRecruitmentBatch!]!
  }

  extend type Mutation {
    createHrRecruitmentBatch(tenantId: String!, code: String!, name: String!): HrRecruitmentBatch!
    deleteHrRecruitmentBatch(id: ID!): Boolean!
  }
`;

export const HrRecruitmentBatchGqlResolvers = {
  Query: {
    getHrRecruitmentBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrRecruitmentBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
