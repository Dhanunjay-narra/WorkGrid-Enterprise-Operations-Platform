export const BiAnomaliesStateGqlTypeDefs = `
  type BiAnomaliesState {
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
    getBiAnomaliesState(id: ID!): BiAnomaliesState
    listBiAnomaliesStates(tenantId: String!, limit: Int): [BiAnomaliesState!]!
  }

  extend type Mutation {
    createBiAnomaliesState(tenantId: String!, code: String!, name: String!): BiAnomaliesState!
    deleteBiAnomaliesState(id: ID!): Boolean!
  }
`;

export const BiAnomaliesStateGqlResolvers = {
  Query: {
    getBiAnomaliesState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiAnomaliesState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
