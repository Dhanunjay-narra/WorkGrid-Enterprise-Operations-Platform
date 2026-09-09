export const HrEmployeesProfileGqlTypeDefs = `
  type HrEmployeesProfile {
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
    getHrEmployeesProfile(id: ID!): HrEmployeesProfile
    listHrEmployeesProfiles(tenantId: String!, limit: Int): [HrEmployeesProfile!]!
  }

  extend type Mutation {
    createHrEmployeesProfile(tenantId: String!, code: String!, name: String!): HrEmployeesProfile!
    deleteHrEmployeesProfile(id: ID!): Boolean!
  }
`;

export const HrEmployeesProfileGqlResolvers = {
  Query: {
    getHrEmployeesProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrEmployeesProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
