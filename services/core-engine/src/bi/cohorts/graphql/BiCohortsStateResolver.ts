export const BiCohortsStateGqlTypeDefs = `
  type BiCohortsState {
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
    getBiCohortsState(id: ID!): BiCohortsState
    listBiCohortsStates(tenantId: String!, limit: Int): [BiCohortsState!]!
  }

  extend type Mutation {
    createBiCohortsState(tenantId: String!, code: String!, name: String!): BiCohortsState!
    deleteBiCohortsState(id: ID!): Boolean!
  }
`;

export const BiCohortsStateGqlResolvers = {
  Query: {
    getBiCohortsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiCohortsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
