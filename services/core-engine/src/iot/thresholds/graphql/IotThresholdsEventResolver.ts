export const IotThresholdsEventGqlTypeDefs = `
  type IotThresholdsEvent {
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
    getIotThresholdsEvent(id: ID!): IotThresholdsEvent
    listIotThresholdsEvents(tenantId: String!, limit: Int): [IotThresholdsEvent!]!
  }

  extend type Mutation {
    createIotThresholdsEvent(tenantId: String!, code: String!, name: String!): IotThresholdsEvent!
    deleteIotThresholdsEvent(id: ID!): Boolean!
  }
`;

export const IotThresholdsEventGqlResolvers = {
  Query: {
    getIotThresholdsEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotThresholdsEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
