export const IntSyncStateGqlTypeDefs = `
  type IntSyncState {
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
    getIntSyncState(id: ID!): IntSyncState
    listIntSyncStates(tenantId: String!, limit: Int): [IntSyncState!]!
  }

  extend type Mutation {
    createIntSyncState(tenantId: String!, code: String!, name: String!): IntSyncState!
    deleteIntSyncState(id: ID!): Boolean!
  }
`;

export const IntSyncStateGqlResolvers = {
  Query: {
    getIntSyncState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSyncState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
