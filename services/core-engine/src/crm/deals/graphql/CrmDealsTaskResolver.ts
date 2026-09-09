export const CrmDealsTaskGqlTypeDefs = `
  type CrmDealsTask {
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
    getCrmDealsTask(id: ID!): CrmDealsTask
    listCrmDealsTasks(tenantId: String!, limit: Int): [CrmDealsTask!]!
  }

  extend type Mutation {
    createCrmDealsTask(tenantId: String!, code: String!, name: String!): CrmDealsTask!
    deleteCrmDealsTask(id: ID!): Boolean!
  }
`;

export const CrmDealsTaskGqlResolvers = {
  Query: {
    getCrmDealsTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmDealsTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
