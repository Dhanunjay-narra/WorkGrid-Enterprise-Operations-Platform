export const AuditTaskGqlTypeDefs = `
  type AuditTask {
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
    getAuditTask(id: ID!): AuditTask
    listAuditTasks(tenantId: String!, limit: Int): [AuditTask!]!
  }

  extend type Mutation {
    createAuditTask(tenantId: String!, code: String!, name: String!): AuditTask!
    deleteAuditTask(id: ID!): Boolean!
  }
`;

export const AuditTaskGqlResolvers = {
  Query: {
    getAuditTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuditTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
