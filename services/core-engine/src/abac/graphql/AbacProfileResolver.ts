export const AbacProfileGqlTypeDefs = `
  type AbacProfile {
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
    getAbacProfile(id: ID!): AbacProfile
    listAbacProfiles(tenantId: String!, limit: Int): [AbacProfile!]!
  }

  extend type Mutation {
    createAbacProfile(tenantId: String!, code: String!, name: String!): AbacProfile!
    deleteAbacProfile(id: ID!): Boolean!
  }
`;

export const AbacProfileGqlResolvers = {
  Query: {
    getAbacProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AbacProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
