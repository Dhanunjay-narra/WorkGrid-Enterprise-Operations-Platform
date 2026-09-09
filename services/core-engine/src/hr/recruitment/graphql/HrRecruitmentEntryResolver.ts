export const HrRecruitmentEntryGqlTypeDefs = `
  type HrRecruitmentEntry {
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
    getHrRecruitmentEntry(id: ID!): HrRecruitmentEntry
    listHrRecruitmentEntrys(tenantId: String!, limit: Int): [HrRecruitmentEntry!]!
  }

  extend type Mutation {
    createHrRecruitmentEntry(tenantId: String!, code: String!, name: String!): HrRecruitmentEntry!
    deleteHrRecruitmentEntry(id: ID!): Boolean!
  }
`;

export const HrRecruitmentEntryGqlResolvers = {
  Query: {
    getHrRecruitmentEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrRecruitmentEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
