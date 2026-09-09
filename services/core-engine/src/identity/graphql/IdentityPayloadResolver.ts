export const IdentityPayloadGqlTypeDefs = `
  type IdentityPayload {
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
    getIdentityPayload(id: ID!): IdentityPayload
    listIdentityPayloads(tenantId: String!, limit: Int): [IdentityPayload!]!
  }

  extend type Mutation {
    createIdentityPayload(tenantId: String!, code: String!, name: String!): IdentityPayload!
    deleteIdentityPayload(id: ID!): Boolean!
  }
`;

export const IdentityPayloadGqlResolvers = {
  Query: {
    getIdentityPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IdentityPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
