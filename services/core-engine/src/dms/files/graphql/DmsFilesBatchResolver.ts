export const DmsFilesBatchGqlTypeDefs = `
  type DmsFilesBatch {
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
    getDmsFilesBatch(id: ID!): DmsFilesBatch
    listDmsFilesBatchs(tenantId: String!, limit: Int): [DmsFilesBatch!]!
  }

  extend type Mutation {
    createDmsFilesBatch(tenantId: String!, code: String!, name: String!): DmsFilesBatch!
    deleteDmsFilesBatch(id: ID!): Boolean!
  }
`;

export const DmsFilesBatchGqlResolvers = {
  Query: {
    getDmsFilesBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFilesBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
