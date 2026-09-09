export const CrmAccountsTaskGqlTypeDefs = `
  type CrmAccountsTask {
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
    getCrmAccountsTask(id: ID!): CrmAccountsTask
    listCrmAccountsTasks(tenantId: String!, limit: Int): [CrmAccountsTask!]!
  }

  extend type Mutation {
    createCrmAccountsTask(tenantId: String!, code: String!, name: String!): CrmAccountsTask!
    deleteCrmAccountsTask(id: ID!): Boolean!
  }
`;

export const CrmAccountsTaskGqlResolvers = {
  Query: {
    getCrmAccountsTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmAccountsTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
