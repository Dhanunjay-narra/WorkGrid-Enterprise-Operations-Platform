export const IntSalesforceTaskGqlTypeDefs = `
  type IntSalesforceTask {
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
    getIntSalesforceTask(id: ID!): IntSalesforceTask
    listIntSalesforceTasks(tenantId: String!, limit: Int): [IntSalesforceTask!]!
  }

  extend type Mutation {
    createIntSalesforceTask(tenantId: String!, code: String!, name: String!): IntSalesforceTask!
    deleteIntSalesforceTask(id: ID!): Boolean!
  }
`;

export const IntSalesforceTaskGqlResolvers = {
  Query: {
    getIntSalesforceTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSalesforceTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
