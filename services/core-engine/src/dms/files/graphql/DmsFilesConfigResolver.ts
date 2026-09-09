export const DmsFilesConfigGqlTypeDefs = `
  type DmsFilesConfig {
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
    getDmsFilesConfig(id: ID!): DmsFilesConfig
    listDmsFilesConfigs(tenantId: String!, limit: Int): [DmsFilesConfig!]!
  }

  extend type Mutation {
    createDmsFilesConfig(tenantId: String!, code: String!, name: String!): DmsFilesConfig!
    deleteDmsFilesConfig(id: ID!): Boolean!
  }
`;

export const DmsFilesConfigGqlResolvers = {
  Query: {
    getDmsFilesConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFilesConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
