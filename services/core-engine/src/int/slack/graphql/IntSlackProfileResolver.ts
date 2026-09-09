export const IntSlackProfileGqlTypeDefs = `
  type IntSlackProfile {
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
    getIntSlackProfile(id: ID!): IntSlackProfile
    listIntSlackProfiles(tenantId: String!, limit: Int): [IntSlackProfile!]!
  }

  extend type Mutation {
    createIntSlackProfile(tenantId: String!, code: String!, name: String!): IntSlackProfile!
    deleteIntSlackProfile(id: ID!): Boolean!
  }
`;

export const IntSlackProfileGqlResolvers = {
  Query: {
    getIntSlackProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSlackProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
