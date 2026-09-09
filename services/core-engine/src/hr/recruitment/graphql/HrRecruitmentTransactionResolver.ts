export const HrRecruitmentTransactionGqlTypeDefs = `
  type HrRecruitmentTransaction {
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
    getHrRecruitmentTransaction(id: ID!): HrRecruitmentTransaction
    listHrRecruitmentTransactions(tenantId: String!, limit: Int): [HrRecruitmentTransaction!]!
  }

  extend type Mutation {
    createHrRecruitmentTransaction(tenantId: String!, code: String!, name: String!): HrRecruitmentTransaction!
    deleteHrRecruitmentTransaction(id: ID!): Boolean!
  }
`;

export const HrRecruitmentTransactionGqlResolvers = {
  Query: {
    getHrRecruitmentTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrRecruitmentTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
