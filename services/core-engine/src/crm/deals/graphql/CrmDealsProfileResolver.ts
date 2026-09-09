export const CrmDealsProfileGqlTypeDefs = `
  type CrmDealsProfile {
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
    getCrmDealsProfile(id: ID!): CrmDealsProfile
    listCrmDealsProfiles(tenantId: String!, limit: Int): [CrmDealsProfile!]!
  }

  extend type Mutation {
    createCrmDealsProfile(tenantId: String!, code: String!, name: String!): CrmDealsProfile!
    deleteCrmDealsProfile(id: ID!): Boolean!
  }
`;

export const CrmDealsProfileGqlResolvers = {
  Query: {
    getCrmDealsProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmDealsProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
