export const IntOauthThresholdGqlTypeDefs = `
  type IntOauthThreshold {
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
    getIntOauthThreshold(id: ID!): IntOauthThreshold
    listIntOauthThresholds(tenantId: String!, limit: Int): [IntOauthThreshold!]!
  }

  extend type Mutation {
    createIntOauthThreshold(tenantId: String!, code: String!, name: String!): IntOauthThreshold!
    deleteIntOauthThreshold(id: ID!): Boolean!
  }
`;

export const IntOauthThresholdGqlResolvers = {
  Query: {
    getIntOauthThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntOauthThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
