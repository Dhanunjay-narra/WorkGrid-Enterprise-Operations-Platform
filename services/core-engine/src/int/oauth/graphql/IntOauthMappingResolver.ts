export const IntOauthMappingGqlTypeDefs = `
  type IntOauthMapping {
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
    getIntOauthMapping(id: ID!): IntOauthMapping
    listIntOauthMappings(tenantId: String!, limit: Int): [IntOauthMapping!]!
  }

  extend type Mutation {
    createIntOauthMapping(tenantId: String!, code: String!, name: String!): IntOauthMapping!
    deleteIntOauthMapping(id: ID!): Boolean!
  }
`;

export const IntOauthMappingGqlResolvers = {
  Query: {
    getIntOauthMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntOauthMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
