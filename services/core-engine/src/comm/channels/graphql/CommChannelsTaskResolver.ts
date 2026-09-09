export const CommChannelsTaskGqlTypeDefs = `
  type CommChannelsTask {
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
    getCommChannelsTask(id: ID!): CommChannelsTask
    listCommChannelsTasks(tenantId: String!, limit: Int): [CommChannelsTask!]!
  }

  extend type Mutation {
    createCommChannelsTask(tenantId: String!, code: String!, name: String!): CommChannelsTask!
    deleteCommChannelsTask(id: ID!): Boolean!
  }
`;

export const CommChannelsTaskGqlResolvers = {
  Query: {
    getCommChannelsTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommChannelsTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
