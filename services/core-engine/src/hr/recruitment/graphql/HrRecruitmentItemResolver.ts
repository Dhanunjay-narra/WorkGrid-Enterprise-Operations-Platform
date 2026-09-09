export const HrRecruitmentItemGqlTypeDefs = `
  type HrRecruitmentItem {
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
    getHrRecruitmentItem(id: ID!): HrRecruitmentItem
    listHrRecruitmentItems(tenantId: String!, limit: Int): [HrRecruitmentItem!]!
  }

  extend type Mutation {
    createHrRecruitmentItem(tenantId: String!, code: String!, name: String!): HrRecruitmentItem!
    deleteHrRecruitmentItem(id: ID!): Boolean!
  }
`;

export const HrRecruitmentItemGqlResolvers = {
  Query: {
    getHrRecruitmentItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrRecruitmentItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
