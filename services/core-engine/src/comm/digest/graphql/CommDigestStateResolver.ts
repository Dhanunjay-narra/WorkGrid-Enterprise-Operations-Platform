export const CommDigestStateGqlTypeDefs = `
  type CommDigestState {
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
    getCommDigestState(id: ID!): CommDigestState
    listCommDigestStates(tenantId: String!, limit: Int): [CommDigestState!]!
  }

  extend type Mutation {
    createCommDigestState(tenantId: String!, code: String!, name: String!): CommDigestState!
    deleteCommDigestState(id: ID!): Boolean!
  }
`;

export const CommDigestStateGqlResolvers = {
  Query: {
    getCommDigestState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommDigestState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
