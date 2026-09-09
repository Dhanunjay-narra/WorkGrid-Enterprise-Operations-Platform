export const HrRecruitmentSessionGqlTypeDefs = `
  type HrRecruitmentSession {
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
    getHrRecruitmentSession(id: ID!): HrRecruitmentSession
    listHrRecruitmentSessions(tenantId: String!, limit: Int): [HrRecruitmentSession!]!
  }

  extend type Mutation {
    createHrRecruitmentSession(tenantId: String!, code: String!, name: String!): HrRecruitmentSession!
    deleteHrRecruitmentSession(id: ID!): Boolean!
  }
`;

export const HrRecruitmentSessionGqlResolvers = {
  Query: {
    getHrRecruitmentSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrRecruitmentSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
