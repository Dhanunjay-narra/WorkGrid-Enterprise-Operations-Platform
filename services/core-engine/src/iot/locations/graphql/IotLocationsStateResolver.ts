export const IotLocationsStateGqlTypeDefs = `
  type IotLocationsState {
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
    getIotLocationsState(id: ID!): IotLocationsState
    listIotLocationsStates(tenantId: String!, limit: Int): [IotLocationsState!]!
  }

  extend type Mutation {
    createIotLocationsState(tenantId: String!, code: String!, name: String!): IotLocationsState!
    deleteIotLocationsState(id: ID!): Boolean!
  }
`;

export const IotLocationsStateGqlResolvers = {
  Query: {
    getIotLocationsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotLocationsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
