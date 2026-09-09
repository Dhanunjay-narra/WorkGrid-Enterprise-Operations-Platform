export const AuditProfileGqlTypeDefs = `
  type AuditProfile {
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
    getAuditProfile(id: ID!): AuditProfile
    listAuditProfiles(tenantId: String!, limit: Int): [AuditProfile!]!
  }

  extend type Mutation {
    createAuditProfile(tenantId: String!, code: String!, name: String!): AuditProfile!
    deleteAuditProfile(id: ID!): Boolean!
  }
`;

export const AuditProfileGqlResolvers = {
  Query: {
    getAuditProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuditProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
