export const HrPayrollProfileGqlTypeDefs = `
  type HrPayrollProfile {
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
    getHrPayrollProfile(id: ID!): HrPayrollProfile
    listHrPayrollProfiles(tenantId: String!, limit: Int): [HrPayrollProfile!]!
  }

  extend type Mutation {
    createHrPayrollProfile(tenantId: String!, code: String!, name: String!): HrPayrollProfile!
    deleteHrPayrollProfile(id: ID!): Boolean!
  }
`;

export const HrPayrollProfileGqlResolvers = {
  Query: {
    getHrPayrollProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPayrollProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
