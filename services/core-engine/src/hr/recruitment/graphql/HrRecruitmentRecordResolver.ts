export const HrRecruitmentRecordGqlTypeDefs = `
  type HrRecruitmentRecord {
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
    getHrRecruitmentRecord(id: ID!): HrRecruitmentRecord
    listHrRecruitmentRecords(tenantId: String!, limit: Int): [HrRecruitmentRecord!]!
  }

  extend type Mutation {
    createHrRecruitmentRecord(tenantId: String!, code: String!, name: String!): HrRecruitmentRecord!
    deleteHrRecruitmentRecord(id: ID!): Boolean!
  }
`;

export const HrRecruitmentRecordGqlResolvers = {
  Query: {
    getHrRecruitmentRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrRecruitmentRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
