export const CommPresenceStateGqlTypeDefs = `
  type CommPresenceState {
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
    getCommPresenceState(id: ID!): CommPresenceState
    listCommPresenceStates(tenantId: String!, limit: Int): [CommPresenceState!]!
  }

  extend type Mutation {
    createCommPresenceState(tenantId: String!, code: String!, name: String!): CommPresenceState!
    deleteCommPresenceState(id: ID!): Boolean!
  }
`;

export const CommPresenceStateGqlResolvers = {
  Query: {
    getCommPresenceState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommPresenceState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
