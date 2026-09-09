export const HrRecruitmentTaskGqlTypeDefs = `
  type HrRecruitmentTask {
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
    getHrRecruitmentTask(id: ID!): HrRecruitmentTask
    listHrRecruitmentTasks(tenantId: String!, limit: Int): [HrRecruitmentTask!]!
  }

  extend type Mutation {
    createHrRecruitmentTask(tenantId: String!, code: String!, name: String!): HrRecruitmentTask!
    deleteHrRecruitmentTask(id: ID!): Boolean!
  }
`;

export const HrRecruitmentTaskGqlResolvers = {
  Query: {
    getHrRecruitmentTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrRecruitmentTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
