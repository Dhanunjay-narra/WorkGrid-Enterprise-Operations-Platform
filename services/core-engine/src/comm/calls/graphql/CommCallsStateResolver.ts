export const CommCallsStateGqlTypeDefs = `
  type CommCallsState {
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
    getCommCallsState(id: ID!): CommCallsState
    listCommCallsStates(tenantId: String!, limit: Int): [CommCallsState!]!
  }

  extend type Mutation {
    createCommCallsState(tenantId: String!, code: String!, name: String!): CommCallsState!
    deleteCommCallsState(id: ID!): Boolean!
  }
`;

export const CommCallsStateGqlResolvers = {
  Query: {
    getCommCallsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommCallsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
