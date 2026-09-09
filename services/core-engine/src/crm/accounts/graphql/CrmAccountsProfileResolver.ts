export const CrmAccountsProfileGqlTypeDefs = `
  type CrmAccountsProfile {
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
    getCrmAccountsProfile(id: ID!): CrmAccountsProfile
    listCrmAccountsProfiles(tenantId: String!, limit: Int): [CrmAccountsProfile!]!
  }

  extend type Mutation {
    createCrmAccountsProfile(tenantId: String!, code: String!, name: String!): CrmAccountsProfile!
    deleteCrmAccountsProfile(id: ID!): Boolean!
  }
`;

export const CrmAccountsProfileGqlResolvers = {
  Query: {
    getCrmAccountsProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmAccountsProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
