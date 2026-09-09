export const AbacStateGqlTypeDefs = `
  type AbacState {
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
    getAbacState(id: ID!): AbacState
    listAbacStates(tenantId: String!, limit: Int): [AbacState!]!
  }

  extend type Mutation {
    createAbacState(tenantId: String!, code: String!, name: String!): AbacState!
    deleteAbacState(id: ID!): Boolean!
  }
`;

export const AbacStateGqlResolvers = {
  Query: {
    getAbacState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AbacState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
