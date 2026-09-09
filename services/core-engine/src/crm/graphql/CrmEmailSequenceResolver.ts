export const CrmEmailSequenceTypeDefs = `
  type CrmEmailSequence {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getCrmEmailSequence(id: ID!): CrmEmailSequence
    listCrmEmailSequences(tenantId: String!): [CrmEmailSequence!]!
  }
`;

export const CrmEmailSequenceResolvers = {
  Query: {
    getCrmEmailSequence: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "CrmEmailSequence", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listCrmEmailSequences: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "CrmEmailSequence", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
