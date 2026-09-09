export const SecurityProfileGqlTypeDefs = `
  type SecurityProfile {
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
    getSecurityProfile(id: ID!): SecurityProfile
    listSecurityProfiles(tenantId: String!, limit: Int): [SecurityProfile!]!
  }

  extend type Mutation {
    createSecurityProfile(tenantId: String!, code: String!, name: String!): SecurityProfile!
    deleteSecurityProfile(id: ID!): Boolean!
  }
`;

export const SecurityProfileGqlResolvers = {
  Query: {
    getSecurityProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SecurityProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
