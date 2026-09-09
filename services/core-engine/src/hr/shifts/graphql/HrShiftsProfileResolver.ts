export const HrShiftsProfileGqlTypeDefs = `
  type HrShiftsProfile {
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
    getHrShiftsProfile(id: ID!): HrShiftsProfile
    listHrShiftsProfiles(tenantId: String!, limit: Int): [HrShiftsProfile!]!
  }

  extend type Mutation {
    createHrShiftsProfile(tenantId: String!, code: String!, name: String!): HrShiftsProfile!
    deleteHrShiftsProfile(id: ID!): Boolean!
  }
`;

export const HrShiftsProfileGqlResolvers = {
  Query: {
    getHrShiftsProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrShiftsProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
