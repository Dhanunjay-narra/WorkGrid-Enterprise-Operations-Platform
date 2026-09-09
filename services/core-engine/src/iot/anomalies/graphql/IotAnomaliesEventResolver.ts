export const IotAnomaliesEventGqlTypeDefs = `
  type IotAnomaliesEvent {
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
    getIotAnomaliesEvent(id: ID!): IotAnomaliesEvent
    listIotAnomaliesEvents(tenantId: String!, limit: Int): [IotAnomaliesEvent!]!
  }

  extend type Mutation {
    createIotAnomaliesEvent(tenantId: String!, code: String!, name: String!): IotAnomaliesEvent!
    deleteIotAnomaliesEvent(id: ID!): Boolean!
  }
`;

export const IotAnomaliesEventGqlResolvers = {
  Query: {
    getIotAnomaliesEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotAnomaliesEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
