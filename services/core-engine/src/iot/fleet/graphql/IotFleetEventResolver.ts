export const IotFleetEventGqlTypeDefs = `
  type IotFleetEvent {
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
    getIotFleetEvent(id: ID!): IotFleetEvent
    listIotFleetEvents(tenantId: String!, limit: Int): [IotFleetEvent!]!
  }

  extend type Mutation {
    createIotFleetEvent(tenantId: String!, code: String!, name: String!): IotFleetEvent!
    deleteIotFleetEvent(id: ID!): Boolean!
  }
`;

export const IotFleetEventGqlResolvers = {
  Query: {
    getIotFleetEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFleetEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
