export const AuthMappingGqlTypeDefs = `
  type AuthMapping {
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
    getAuthMapping(id: ID!): AuthMapping
    listAuthMappings(tenantId: String!, limit: Int): [AuthMapping!]!
  }

  extend type Mutation {
    createAuthMapping(tenantId: String!, code: String!, name: String!): AuthMapping!
    deleteAuthMapping(id: ID!): Boolean!
  }
`;

export const AuthMappingGqlResolvers = {
  Query: {
    getAuthMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuthMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
