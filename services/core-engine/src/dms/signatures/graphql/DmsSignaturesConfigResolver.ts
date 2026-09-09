export const DmsSignaturesConfigGqlTypeDefs = `
  type DmsSignaturesConfig {
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
    getDmsSignaturesConfig(id: ID!): DmsSignaturesConfig
    listDmsSignaturesConfigs(tenantId: String!, limit: Int): [DmsSignaturesConfig!]!
  }

  extend type Mutation {
    createDmsSignaturesConfig(tenantId: String!, code: String!, name: String!): DmsSignaturesConfig!
    deleteDmsSignaturesConfig(id: ID!): Boolean!
  }
`;

export const DmsSignaturesConfigGqlResolvers = {
  Query: {
    getDmsSignaturesConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsSignaturesConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
