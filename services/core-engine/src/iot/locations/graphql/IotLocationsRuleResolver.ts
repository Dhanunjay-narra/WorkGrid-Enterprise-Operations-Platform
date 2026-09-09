export const IotLocationsRuleGqlTypeDefs = `
  type IotLocationsRule {
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
    getIotLocationsRule(id: ID!): IotLocationsRule
    listIotLocationsRules(tenantId: String!, limit: Int): [IotLocationsRule!]!
  }

  extend type Mutation {
    createIotLocationsRule(tenantId: String!, code: String!, name: String!): IotLocationsRule!
    deleteIotLocationsRule(id: ID!): Boolean!
  }
`;

export const IotLocationsRuleGqlResolvers = {
  Query: {
    getIotLocationsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotLocationsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
