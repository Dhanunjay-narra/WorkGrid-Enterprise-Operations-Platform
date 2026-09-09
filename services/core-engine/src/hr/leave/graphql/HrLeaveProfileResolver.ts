export const HrLeaveProfileGqlTypeDefs = `
  type HrLeaveProfile {
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
    getHrLeaveProfile(id: ID!): HrLeaveProfile
    listHrLeaveProfiles(tenantId: String!, limit: Int): [HrLeaveProfile!]!
  }

  extend type Mutation {
    createHrLeaveProfile(tenantId: String!, code: String!, name: String!): HrLeaveProfile!
    deleteHrLeaveProfile(id: ID!): Boolean!
  }
`;

export const HrLeaveProfileGqlResolvers = {
  Query: {
    getHrLeaveProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrLeaveProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
