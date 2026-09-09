export const CommNotificationsStateGqlTypeDefs = `
  type CommNotificationsState {
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
    getCommNotificationsState(id: ID!): CommNotificationsState
    listCommNotificationsStates(tenantId: String!, limit: Int): [CommNotificationsState!]!
  }

  extend type Mutation {
    createCommNotificationsState(tenantId: String!, code: String!, name: String!): CommNotificationsState!
    deleteCommNotificationsState(id: ID!): Boolean!
  }
`;

export const CommNotificationsStateGqlResolvers = {
  Query: {
    getCommNotificationsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommNotificationsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
