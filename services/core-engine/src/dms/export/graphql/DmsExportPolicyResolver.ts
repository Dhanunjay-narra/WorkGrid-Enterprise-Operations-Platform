export const DmsExportPolicyGqlTypeDefs = `
  type DmsExportPolicy {
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
    getDmsExportPolicy(id: ID!): DmsExportPolicy
    listDmsExportPolicys(tenantId: String!, limit: Int): [DmsExportPolicy!]!
  }

  extend type Mutation {
    createDmsExportPolicy(tenantId: String!, code: String!, name: String!): DmsExportPolicy!
    deleteDmsExportPolicy(id: ID!): Boolean!
  }
`;

export const DmsExportPolicyGqlResolvers = {
  Query: {
    getDmsExportPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsExportPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
