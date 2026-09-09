export const HrRecruitmentNodeGqlTypeDefs = `
  type HrRecruitmentNode {
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
    getHrRecruitmentNode(id: ID!): HrRecruitmentNode
    listHrRecruitmentNodes(tenantId: String!, limit: Int): [HrRecruitmentNode!]!
  }

  extend type Mutation {
    createHrRecruitmentNode(tenantId: String!, code: String!, name: String!): HrRecruitmentNode!
    deleteHrRecruitmentNode(id: ID!): Boolean!
  }
`;

export const HrRecruitmentNodeGqlResolvers = {
  Query: {
    getHrRecruitmentNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrRecruitmentNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
