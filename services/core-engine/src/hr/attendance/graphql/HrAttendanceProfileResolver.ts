export const HrAttendanceProfileGqlTypeDefs = `
  type HrAttendanceProfile {
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
    getHrAttendanceProfile(id: ID!): HrAttendanceProfile
    listHrAttendanceProfiles(tenantId: String!, limit: Int): [HrAttendanceProfile!]!
  }

  extend type Mutation {
    createHrAttendanceProfile(tenantId: String!, code: String!, name: String!): HrAttendanceProfile!
    deleteHrAttendanceProfile(id: ID!): Boolean!
  }
`;

export const HrAttendanceProfileGqlResolvers = {
  Query: {
    getHrAttendanceProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrAttendanceProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
