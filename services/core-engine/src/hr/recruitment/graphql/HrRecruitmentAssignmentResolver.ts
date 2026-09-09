export const HrRecruitmentAssignmentGqlTypeDefs = `
  type HrRecruitmentAssignment {
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
    getHrRecruitmentAssignment(id: ID!): HrRecruitmentAssignment
    listHrRecruitmentAssignments(tenantId: String!, limit: Int): [HrRecruitmentAssignment!]!
  }

  extend type Mutation {
    createHrRecruitmentAssignment(tenantId: String!, code: String!, name: String!): HrRecruitmentAssignment!
    deleteHrRecruitmentAssignment(id: ID!): Boolean!
  }
`;

export const HrRecruitmentAssignmentGqlResolvers = {
  Query: {
    getHrRecruitmentAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrRecruitmentAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
