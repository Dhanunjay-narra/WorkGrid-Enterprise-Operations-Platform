export const CommMessagesStateGqlTypeDefs = `
  type CommMessagesState {
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
    getCommMessagesState(id: ID!): CommMessagesState
    listCommMessagesStates(tenantId: String!, limit: Int): [CommMessagesState!]!
  }

  extend type Mutation {
    createCommMessagesState(tenantId: String!, code: String!, name: String!): CommMessagesState!
    deleteCommMessagesState(id: ID!): Boolean!
  }
`;

export const CommMessagesStateGqlResolvers = {
  Query: {
    getCommMessagesState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommMessagesState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
