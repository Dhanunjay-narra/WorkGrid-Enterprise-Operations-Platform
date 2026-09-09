export const IotFleetSessionGqlTypeDefs = `
  type IotFleetSession {
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
    getIotFleetSession(id: ID!): IotFleetSession
    listIotFleetSessions(tenantId: String!, limit: Int): [IotFleetSession!]!
  }

  extend type Mutation {
    createIotFleetSession(tenantId: String!, code: String!, name: String!): IotFleetSession!
    deleteIotFleetSession(id: ID!): Boolean!
  }
`;

export const IotFleetSessionGqlResolvers = {
  Query: {
    getIotFleetSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFleetSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
