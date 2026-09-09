export const HrPerformanceProfileGqlTypeDefs = `
  type HrPerformanceProfile {
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
    getHrPerformanceProfile(id: ID!): HrPerformanceProfile
    listHrPerformanceProfiles(tenantId: String!, limit: Int): [HrPerformanceProfile!]!
  }

  extend type Mutation {
    createHrPerformanceProfile(tenantId: String!, code: String!, name: String!): HrPerformanceProfile!
    deleteHrPerformanceProfile(id: ID!): Boolean!
  }
`;

export const HrPerformanceProfileGqlResolvers = {
  Query: {
    getHrPerformanceProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPerformanceProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
