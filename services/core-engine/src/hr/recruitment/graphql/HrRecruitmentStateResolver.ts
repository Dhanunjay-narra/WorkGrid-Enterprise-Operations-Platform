export const HrRecruitmentStateGqlTypeDefs = `
  type HrRecruitmentState {
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
    getHrRecruitmentState(id: ID!): HrRecruitmentState
    listHrRecruitmentStates(tenantId: String!, limit: Int): [HrRecruitmentState!]!
  }

  extend type Mutation {
    createHrRecruitmentState(tenantId: String!, code: String!, name: String!): HrRecruitmentState!
    deleteHrRecruitmentState(id: ID!): Boolean!
  }
`;

export const HrRecruitmentStateGqlResolvers = {
  Query: {
    getHrRecruitmentState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrRecruitmentState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
