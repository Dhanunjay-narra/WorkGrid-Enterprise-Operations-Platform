export const CommChannelsSessionGqlTypeDefs = `
  type CommChannelsSession {
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
    getCommChannelsSession(id: ID!): CommChannelsSession
    listCommChannelsSessions(tenantId: String!, limit: Int): [CommChannelsSession!]!
  }

  extend type Mutation {
    createCommChannelsSession(tenantId: String!, code: String!, name: String!): CommChannelsSession!
    deleteCommChannelsSession(id: ID!): Boolean!
  }
`;

export const CommChannelsSessionGqlResolvers = {
  Query: {
    getCommChannelsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommChannelsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
