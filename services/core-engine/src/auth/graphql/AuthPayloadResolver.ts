export const AuthPayloadGqlTypeDefs = `
  type AuthPayload {
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
    getAuthPayload(id: ID!): AuthPayload
    listAuthPayloads(tenantId: String!, limit: Int): [AuthPayload!]!
  }

  extend type Mutation {
    createAuthPayload(tenantId: String!, code: String!, name: String!): AuthPayload!
    deleteAuthPayload(id: ID!): Boolean!
  }
`;

export const AuthPayloadGqlResolvers = {
  Query: {
    getAuthPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuthPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
