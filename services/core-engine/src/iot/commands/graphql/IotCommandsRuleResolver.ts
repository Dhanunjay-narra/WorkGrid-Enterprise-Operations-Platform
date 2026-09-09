export const IotCommandsRuleGqlTypeDefs = `
  type IotCommandsRule {
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
    getIotCommandsRule(id: ID!): IotCommandsRule
    listIotCommandsRules(tenantId: String!, limit: Int): [IotCommandsRule!]!
  }

  extend type Mutation {
    createIotCommandsRule(tenantId: String!, code: String!, name: String!): IotCommandsRule!
    deleteIotCommandsRule(id: ID!): Boolean!
  }
`;

export const IotCommandsRuleGqlResolvers = {
  Query: {
    getIotCommandsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotCommandsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
