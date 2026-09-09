export const HrRecruitmentEventGqlTypeDefs = `
  type HrRecruitmentEvent {
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
    getHrRecruitmentEvent(id: ID!): HrRecruitmentEvent
    listHrRecruitmentEvents(tenantId: String!, limit: Int): [HrRecruitmentEvent!]!
  }

  extend type Mutation {
    createHrRecruitmentEvent(tenantId: String!, code: String!, name: String!): HrRecruitmentEvent!
    deleteHrRecruitmentEvent(id: ID!): Boolean!
  }
`;

export const HrRecruitmentEventGqlResolvers = {
  Query: {
    getHrRecruitmentEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrRecruitmentEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
