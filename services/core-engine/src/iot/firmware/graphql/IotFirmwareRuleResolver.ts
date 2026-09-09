export const IotFirmwareRuleGqlTypeDefs = `
  type IotFirmwareRule {
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
    getIotFirmwareRule(id: ID!): IotFirmwareRule
    listIotFirmwareRules(tenantId: String!, limit: Int): [IotFirmwareRule!]!
  }

  extend type Mutation {
    createIotFirmwareRule(tenantId: String!, code: String!, name: String!): IotFirmwareRule!
    deleteIotFirmwareRule(id: ID!): Boolean!
  }
`;

export const IotFirmwareRuleGqlResolvers = {
  Query: {
    getIotFirmwareRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFirmwareRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
