export const HrRecruitmentPayloadGqlTypeDefs = `
  type HrRecruitmentPayload {
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
    getHrRecruitmentPayload(id: ID!): HrRecruitmentPayload
    listHrRecruitmentPayloads(tenantId: String!, limit: Int): [HrRecruitmentPayload!]!
  }

  extend type Mutation {
    createHrRecruitmentPayload(tenantId: String!, code: String!, name: String!): HrRecruitmentPayload!
    deleteHrRecruitmentPayload(id: ID!): Boolean!
  }
`;

export const HrRecruitmentPayloadGqlResolvers = {
  Query: {
    getHrRecruitmentPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrRecruitmentPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
