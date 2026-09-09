export const RbacProfileGqlTypeDefs = `
  type RbacProfile {
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
    getRbacProfile(id: ID!): RbacProfile
    listRbacProfiles(tenantId: String!, limit: Int): [RbacProfile!]!
  }

  extend type Mutation {
    createRbacProfile(tenantId: String!, code: String!, name: String!): RbacProfile!
    deleteRbacProfile(id: ID!): Boolean!
  }
`;

export const RbacProfileGqlResolvers = {
  Query: {
    getRbacProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "RbacProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
