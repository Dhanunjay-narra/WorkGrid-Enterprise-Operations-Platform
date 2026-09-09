export const BiQueriesStateGqlTypeDefs = `
  type BiQueriesState {
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
    getBiQueriesState(id: ID!): BiQueriesState
    listBiQueriesStates(tenantId: String!, limit: Int): [BiQueriesState!]!
  }

  extend type Mutation {
    createBiQueriesState(tenantId: String!, code: String!, name: String!): BiQueriesState!
    deleteBiQueriesState(id: ID!): Boolean!
  }
`;

export const BiQueriesStateGqlResolvers = {
  Query: {
    getBiQueriesState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiQueriesState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
