export const HrRecruitmentQueueGqlTypeDefs = `
  type HrRecruitmentQueue {
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
    getHrRecruitmentQueue(id: ID!): HrRecruitmentQueue
    listHrRecruitmentQueues(tenantId: String!, limit: Int): [HrRecruitmentQueue!]!
  }

  extend type Mutation {
    createHrRecruitmentQueue(tenantId: String!, code: String!, name: String!): HrRecruitmentQueue!
    deleteHrRecruitmentQueue(id: ID!): Boolean!
  }
`;

export const HrRecruitmentQueueGqlResolvers = {
  Query: {
    getHrRecruitmentQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrRecruitmentQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
