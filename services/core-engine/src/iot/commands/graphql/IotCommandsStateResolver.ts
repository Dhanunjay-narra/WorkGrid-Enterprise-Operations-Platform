export const IotCommandsStateGqlTypeDefs = `
  type IotCommandsState {
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
    getIotCommandsState(id: ID!): IotCommandsState
    listIotCommandsStates(tenantId: String!, limit: Int): [IotCommandsState!]!
  }

  extend type Mutation {
    createIotCommandsState(tenantId: String!, code: String!, name: String!): IotCommandsState!
    deleteIotCommandsState(id: ID!): Boolean!
  }
`;

export const IotCommandsStateGqlResolvers = {
  Query: {
    getIotCommandsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotCommandsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
