export const CommChannelsEventGqlTypeDefs = `
  type CommChannelsEvent {
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
    getCommChannelsEvent(id: ID!): CommChannelsEvent
    listCommChannelsEvents(tenantId: String!, limit: Int): [CommChannelsEvent!]!
  }

  extend type Mutation {
    createCommChannelsEvent(tenantId: String!, code: String!, name: String!): CommChannelsEvent!
    deleteCommChannelsEvent(id: ID!): Boolean!
  }
`;

export const CommChannelsEventGqlResolvers = {
  Query: {
    getCommChannelsEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommChannelsEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
