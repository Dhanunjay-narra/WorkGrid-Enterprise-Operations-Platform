export const HrRecruitmentMappingGqlTypeDefs = `
  type HrRecruitmentMapping {
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
    getHrRecruitmentMapping(id: ID!): HrRecruitmentMapping
    listHrRecruitmentMappings(tenantId: String!, limit: Int): [HrRecruitmentMapping!]!
  }

  extend type Mutation {
    createHrRecruitmentMapping(tenantId: String!, code: String!, name: String!): HrRecruitmentMapping!
    deleteHrRecruitmentMapping(id: ID!): Boolean!
  }
`;

export const HrRecruitmentMappingGqlResolvers = {
  Query: {
    getHrRecruitmentMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrRecruitmentMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
