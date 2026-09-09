export const IotFleetRuleGqlTypeDefs = `
  type IotFleetRule {
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
    getIotFleetRule(id: ID!): IotFleetRule
    listIotFleetRules(tenantId: String!, limit: Int): [IotFleetRule!]!
  }

  extend type Mutation {
    createIotFleetRule(tenantId: String!, code: String!, name: String!): IotFleetRule!
    deleteIotFleetRule(id: ID!): Boolean!
  }
`;

export const IotFleetRuleGqlResolvers = {
  Query: {
    getIotFleetRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFleetRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
