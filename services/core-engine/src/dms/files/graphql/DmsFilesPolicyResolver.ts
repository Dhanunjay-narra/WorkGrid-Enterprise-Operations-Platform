export const DmsFilesPolicyGqlTypeDefs = `
  type DmsFilesPolicy {
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
    getDmsFilesPolicy(id: ID!): DmsFilesPolicy
    listDmsFilesPolicys(tenantId: String!, limit: Int): [DmsFilesPolicy!]!
  }

  extend type Mutation {
    createDmsFilesPolicy(tenantId: String!, code: String!, name: String!): DmsFilesPolicy!
    deleteDmsFilesPolicy(id: ID!): Boolean!
  }
`;

export const DmsFilesPolicyGqlResolvers = {
  Query: {
    getDmsFilesPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFilesPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
