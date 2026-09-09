export const HrRecruitmentScheduleGqlTypeDefs = `
  type HrRecruitmentSchedule {
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
    getHrRecruitmentSchedule(id: ID!): HrRecruitmentSchedule
    listHrRecruitmentSchedules(tenantId: String!, limit: Int): [HrRecruitmentSchedule!]!
  }

  extend type Mutation {
    createHrRecruitmentSchedule(tenantId: String!, code: String!, name: String!): HrRecruitmentSchedule!
    deleteHrRecruitmentSchedule(id: ID!): Boolean!
  }
`;

export const HrRecruitmentScheduleGqlResolvers = {
  Query: {
    getHrRecruitmentSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrRecruitmentSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
