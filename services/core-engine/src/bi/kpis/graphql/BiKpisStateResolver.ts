export const BiKpisStateGqlTypeDefs = `
  type BiKpisState {
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
    getBiKpisState(id: ID!): BiKpisState
    listBiKpisStates(tenantId: String!, limit: Int): [BiKpisState!]!
  }

  extend type Mutation {
    createBiKpisState(tenantId: String!, code: String!, name: String!): BiKpisState!
    deleteBiKpisState(id: ID!): Boolean!
  }
`;

export const BiKpisStateGqlResolvers = {
  Query: {
    getBiKpisState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiKpisState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
