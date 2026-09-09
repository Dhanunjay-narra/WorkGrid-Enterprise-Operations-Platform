export const CommChannelsStateGqlTypeDefs = `
  type CommChannelsState {
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
    getCommChannelsState(id: ID!): CommChannelsState
    listCommChannelsStates(tenantId: String!, limit: Int): [CommChannelsState!]!
  }

  extend type Mutation {
    createCommChannelsState(tenantId: String!, code: String!, name: String!): CommChannelsState!
    deleteCommChannelsState(id: ID!): Boolean!
  }
`;

export const CommChannelsStateGqlResolvers = {
  Query: {
    getCommChannelsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommChannelsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
