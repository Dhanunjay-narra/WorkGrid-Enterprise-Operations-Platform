export const IdentitySessionGqlTypeDefs = `
  type IdentitySession {
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
    getIdentitySession(id: ID!): IdentitySession
    listIdentitySessions(tenantId: String!, limit: Int): [IdentitySession!]!
  }

  extend type Mutation {
    createIdentitySession(tenantId: String!, code: String!, name: String!): IdentitySession!
    deleteIdentitySession(id: ID!): Boolean!
  }
`;

export const IdentitySessionGqlResolvers = {
  Query: {
    getIdentitySession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IdentitySession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
