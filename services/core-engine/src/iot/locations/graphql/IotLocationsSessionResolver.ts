export const IotLocationsSessionGqlTypeDefs = `
  type IotLocationsSession {
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
    getIotLocationsSession(id: ID!): IotLocationsSession
    listIotLocationsSessions(tenantId: String!, limit: Int): [IotLocationsSession!]!
  }

  extend type Mutation {
    createIotLocationsSession(tenantId: String!, code: String!, name: String!): IotLocationsSession!
    deleteIotLocationsSession(id: ID!): Boolean!
  }
`;

export const IotLocationsSessionGqlResolvers = {
  Query: {
    getIotLocationsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotLocationsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
