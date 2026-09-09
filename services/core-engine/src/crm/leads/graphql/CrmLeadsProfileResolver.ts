export const CrmLeadsProfileGqlTypeDefs = `
  type CrmLeadsProfile {
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
    getCrmLeadsProfile(id: ID!): CrmLeadsProfile
    listCrmLeadsProfiles(tenantId: String!, limit: Int): [CrmLeadsProfile!]!
  }

  extend type Mutation {
    createCrmLeadsProfile(tenantId: String!, code: String!, name: String!): CrmLeadsProfile!
    deleteCrmLeadsProfile(id: ID!): Boolean!
  }
`;

export const CrmLeadsProfileGqlResolvers = {
  Query: {
    getCrmLeadsProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmLeadsProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
