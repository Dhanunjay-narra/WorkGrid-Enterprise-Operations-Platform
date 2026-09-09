export const DmsOcrConfigGqlTypeDefs = `
  type DmsOcrConfig {
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
    getDmsOcrConfig(id: ID!): DmsOcrConfig
    listDmsOcrConfigs(tenantId: String!, limit: Int): [DmsOcrConfig!]!
  }

  extend type Mutation {
    createDmsOcrConfig(tenantId: String!, code: String!, name: String!): DmsOcrConfig!
    deleteDmsOcrConfig(id: ID!): Boolean!
  }
`;

export const DmsOcrConfigGqlResolvers = {
  Query: {
    getDmsOcrConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsOcrConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
