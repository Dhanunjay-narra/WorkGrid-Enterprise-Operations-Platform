export const BiWidgetsStateGqlTypeDefs = `
  type BiWidgetsState {
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
    getBiWidgetsState(id: ID!): BiWidgetsState
    listBiWidgetsStates(tenantId: String!, limit: Int): [BiWidgetsState!]!
  }

  extend type Mutation {
    createBiWidgetsState(tenantId: String!, code: String!, name: String!): BiWidgetsState!
    deleteBiWidgetsState(id: ID!): Boolean!
  }
`;

export const BiWidgetsStateGqlResolvers = {
  Query: {
    getBiWidgetsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiWidgetsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
