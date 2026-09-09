export const IotCommandsPolicyGqlTypeDefs = `
  type IotCommandsPolicy {
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
    getIotCommandsPolicy(id: ID!): IotCommandsPolicy
    listIotCommandsPolicys(tenantId: String!, limit: Int): [IotCommandsPolicy!]!
  }

  extend type Mutation {
    createIotCommandsPolicy(tenantId: String!, code: String!, name: String!): IotCommandsPolicy!
    deleteIotCommandsPolicy(id: ID!): Boolean!
  }
`;

export const IotCommandsPolicyGqlResolvers = {
  Query: {
    getIotCommandsPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotCommandsPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
