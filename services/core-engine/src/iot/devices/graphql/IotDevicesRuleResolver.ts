export const IotDevicesRuleGqlTypeDefs = `
  type IotDevicesRule {
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
    getIotDevicesRule(id: ID!): IotDevicesRule
    listIotDevicesRules(tenantId: String!, limit: Int): [IotDevicesRule!]!
  }

  extend type Mutation {
    createIotDevicesRule(tenantId: String!, code: String!, name: String!): IotDevicesRule!
    deleteIotDevicesRule(id: ID!): Boolean!
  }
`;

export const IotDevicesRuleGqlResolvers = {
  Query: {
    getIotDevicesRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotDevicesRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
