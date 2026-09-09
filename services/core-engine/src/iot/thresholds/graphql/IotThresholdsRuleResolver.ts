export const IotThresholdsRuleGqlTypeDefs = `
  type IotThresholdsRule {
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
    getIotThresholdsRule(id: ID!): IotThresholdsRule
    listIotThresholdsRules(tenantId: String!, limit: Int): [IotThresholdsRule!]!
  }

  extend type Mutation {
    createIotThresholdsRule(tenantId: String!, code: String!, name: String!): IotThresholdsRule!
    deleteIotThresholdsRule(id: ID!): Boolean!
  }
`;

export const IotThresholdsRuleGqlResolvers = {
  Query: {
    getIotThresholdsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotThresholdsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
