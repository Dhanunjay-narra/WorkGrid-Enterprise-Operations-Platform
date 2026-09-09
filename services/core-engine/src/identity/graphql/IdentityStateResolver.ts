export const IdentityStateGqlTypeDefs = `
  type IdentityState {
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
    getIdentityState(id: ID!): IdentityState
    listIdentityStates(tenantId: String!, limit: Int): [IdentityState!]!
  }

  extend type Mutation {
    createIdentityState(tenantId: String!, code: String!, name: String!): IdentityState!
    deleteIdentityState(id: ID!): Boolean!
  }
`;

export const IdentityStateGqlResolvers = {
  Query: {
    getIdentityState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IdentityState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
