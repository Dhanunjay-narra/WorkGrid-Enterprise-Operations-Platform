export const IntOauthStateGqlTypeDefs = `
  type IntOauthState {
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
    getIntOauthState(id: ID!): IntOauthState
    listIntOauthStates(tenantId: String!, limit: Int): [IntOauthState!]!
  }

  extend type Mutation {
    createIntOauthState(tenantId: String!, code: String!, name: String!): IntOauthState!
    deleteIntOauthState(id: ID!): Boolean!
  }
`;

export const IntOauthStateGqlResolvers = {
  Query: {
    getIntOauthState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntOauthState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
